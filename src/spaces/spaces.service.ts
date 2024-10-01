import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { CreateSpaceDto } from './dto/create-space.dto';
import { UpdateSpaceDto } from './dto/update-space.dto';
import { Space } from './entities/space.entity';

@Injectable()
export class SpacesService {
  constructor(
    @InjectRepository(Space)
    private readonly spacesRepository: Repository<Space>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createSpaceDto: CreateSpaceDto): Promise<Space> {
    const space = new Space(createSpaceDto);

    return await this.entityManager.save(space);
  }

  async findAll(): Promise<Space[]> {
    return await this.spacesRepository.find();
  }

  async findOne(id: number): Promise<Space> {
    return await this.spacesRepository.findOne({ where: { id }, relations: { lounges: true } });
  }

  async update(id: number, updateSpaceDto: UpdateSpaceDto): Promise<Space> {
    const space = await this.spacesRepository.findOneBy({ id });

    return await this.entityManager.save(new Space({ ...space, ...updateSpaceDto }));
  }

  async remove(id: number) {
    await this.spacesRepository.delete(id);
  }
}
