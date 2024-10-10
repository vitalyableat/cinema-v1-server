import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre } from './entities/genre.entity';

@Injectable()
export class GenresService {
  constructor(
    @InjectRepository(Genre)
    private readonly genresRepository: Repository<Genre>,
    private readonly entityManager: EntityManager,
  ) {}
  async create(createGenreDto: CreateGenreDto): Promise<Genre> {
    const genre = new Genre(createGenreDto);
    return await this.entityManager.save(genre);
  }

  async findAll(): Promise<Genre[]> {
    return await this.genresRepository.find();
  }

  async update(id: number, updateGenreDto: UpdateGenreDto): Promise<Genre> {
    const genre = await this.genresRepository.findOneBy({ id });

    return await this.entityManager.save(new Genre({ ...genre, ...updateGenreDto }));
  }

  async remove(id: number) {
    await this.genresRepository.delete(id);
  }
}
