import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { AudioTechnology } from '../audio-technologies/entities/audio-technology.entity';
import { BucketsEnum } from '../config/enums/buckets.enum';
import { FilesService } from '../files/files.service';
import { Genre } from '../genres/entities/genre.entity';
import { Language } from '../languages/entities/language.entity';
import { ShowType } from '../show-types/entities/show-type.entity';
import { VideoTechnology } from '../video-technologies/entities/video-technology.entity';
import { CreateShowDto } from './dto/create-show.dto';
import { UpdateShowDto } from './dto/update-show.dto';
import { Show } from './entities/show.entity';

@Injectable()
export class ShowsService {
  constructor(
    @InjectRepository(Show)
    private readonly showsRepository: Repository<Show>,
    @InjectRepository(ShowType)
    private readonly showTypesRepository: Repository<ShowType>,
    @InjectRepository(Language)
    private readonly languagesRepository: Repository<Language>,
    @InjectRepository(Genre)
    private readonly genresRepository: Repository<Genre>,
    @InjectRepository(AudioTechnology)
    private readonly audioTechnologiesRepository: Repository<AudioTechnology>,
    @InjectRepository(VideoTechnology)
    private readonly videoTechnologiesRepository: Repository<VideoTechnology>,
    private readonly entityManager: EntityManager,
    private readonly filesService: FilesService,
  ) {}

  async create(createShowDto: CreateShowDto): Promise<Show> {
    let preview = '';

    if (createShowDto.preview) {
      preview = await this.filesService.uploadFile(BucketsEnum.PREVIEWS, createShowDto.preview);
    }

    const type = await this.showTypesRepository.findOneBy({ id: createShowDto.showTypeId });
    const languages = await Promise.all(
      createShowDto.languageIds.map((id) => this.languagesRepository.findOneBy({ id })),
    );
    const genres = await Promise.all(createShowDto.genreIds.map((id) => this.genresRepository.findOneBy({ id })));
    const audioTechnologies = await Promise.all(
      createShowDto.audioTechnologyIds.map((id) => this.audioTechnologiesRepository.findOneBy({ id })),
    );
    const videoTechnologies = await Promise.all(
      createShowDto.videoTechnologyIds.map((id) => this.videoTechnologiesRepository.findOneBy({ id })),
    );

    const show = new Show({
      ...createShowDto,
      preview,
      type,
      languages,
      genres,
      audioTechnologies,
      videoTechnologies,
    });

    return await this.entityManager.save(show);
  }

  async findAll(): Promise<Show[]> {
    return await this.showsRepository.find();
  }

  async findOne(id: number): Promise<Show> {
    return await this.showsRepository.findOne({
      where: { id },
      relations: {
        type: true,
        languages: true,
        genres: true,
        audioTechnologies: true,
        videoTechnologies: true,
        sessions: true,
        photos: true,
      },
    });
  }

  async update(id: number, updateShowDto: UpdateShowDto): Promise<Show> {
    let preview = '';
    const show = await this.showsRepository.findOneBy({ id });

    if (show.preview) {
      await this.filesService.removeFile(show.preview);
    }

    if (updateShowDto.preview) {
      preview = await this.filesService.uploadFile(BucketsEnum.PREVIEWS, updateShowDto.preview);
    }

    const type = await this.showTypesRepository.findOneBy({ id: updateShowDto.showTypeId });
    const languages = await Promise.all(
      updateShowDto.languageIds.map((id) => this.languagesRepository.findOneBy({ id })),
    );
    const genres = await Promise.all(updateShowDto.genreIds.map((id) => this.genresRepository.findOneBy({ id })));
    const audioTechnologies = await Promise.all(
      updateShowDto.audioTechnologyIds.map((id) => this.audioTechnologiesRepository.findOneBy({ id })),
    );
    const videoTechnologies = await Promise.all(
      updateShowDto.videoTechnologyIds.map((id) => this.videoTechnologiesRepository.findOneBy({ id })),
    );

    return await this.entityManager.save(
      new Show({
        ...show,
        ...updateShowDto,
        preview,
        type,
        languages,
        genres,
        audioTechnologies,
        videoTechnologies,
      }),
    );
  }

  async remove(id: number) {
    const show = await this.showsRepository.findOneBy({ id });

    if (show.preview) {
      await this.filesService.removeFile(show.preview);
    }

    await this.showsRepository.delete(id);
  }
}
