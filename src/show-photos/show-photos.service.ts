import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { BucketsEnum } from '../config/enums/buckets.enum';
import { FilesService } from '../files/files.service';
import { Show } from '../shows/entities/show.entity';
import { CreateShowPhotoDto } from './dto/create-show-photo.dto';
import { ShowPhoto } from './entities/show-photo.entity';

@Injectable()
export class ShowPhotosService {
  constructor(
    @InjectRepository(ShowPhoto)
    private readonly showPhotosRepository: Repository<ShowPhoto>,
    @InjectRepository(Show)
    private readonly showsRepository: Repository<Show>,
    private readonly entityManager: EntityManager,
    private readonly filesService: FilesService,
  ) {}

  async create(createShowPhotoDto: CreateShowPhotoDto): Promise<ShowPhoto> {
    const img = await this.filesService.uploadFile(BucketsEnum.SHOW_PHOTOS, createShowPhotoDto.img);
    const show = await this.showsRepository.findOneBy({ id: createShowPhotoDto.showId });

    return await this.entityManager.save(new ShowPhoto({ ...createShowPhotoDto, img, show }));
  }

  async remove(id: number) {
    const seat = await this.showPhotosRepository.findOneBy({ id });

    await this.filesService.removeFile(seat.img);

    await this.showPhotosRepository.delete(id);
  }
}
