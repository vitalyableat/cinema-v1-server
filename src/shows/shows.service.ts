import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { CreateShowDto } from './dto/create-show.dto';
import { UpdateShowDto } from './dto/update-show.dto';
import { Show } from './entities/show.entity';

@Injectable()
export class ShowsService {
  constructor(
    @InjectRepository(Show)
    private readonly showsRepository: Repository<Show>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createShowDto: CreateShowDto): Promise<Show> {
    const show = new Show(createShowDto);

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
    const show = await this.showsRepository.findOneBy({ id });

    return await this.entityManager.save(new Show({ ...show, ...updateShowDto }));
  }

  async remove(id: number) {
    await this.showsRepository.delete(id);
  }
}
