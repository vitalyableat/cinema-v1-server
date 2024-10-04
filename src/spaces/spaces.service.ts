import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { Location } from '../locations/entities/location.entity';
import { CreateSpaceDto } from './dto/create-space.dto';
import { UpdateSpaceDto } from './dto/update-space.dto';
import { Space } from './entities/space.entity';

@Injectable()
export class SpacesService {
  constructor(
    @InjectRepository(Space)
    private readonly spacesRepository: Repository<Space>,
    @InjectRepository(Location)
    private readonly locationsRepository: Repository<Location>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createSpaceDto: CreateSpaceDto): Promise<Space> {
    const location = await this.locationsRepository.findOneBy({ id: createSpaceDto.locationId });

    return await this.entityManager.save(new Space({ ...createSpaceDto, location }));
  }

  async findAll(): Promise<Space[]> {
    return await this.spacesRepository.find();
  }

  async findOne(id: number): Promise<Space> {
    return await this.spacesRepository.findOne({ where: { id }, relations: { lounges: true } });
  }

  async update(id: number, updateSpaceDto: UpdateSpaceDto): Promise<Space> {
    const space = await this.spacesRepository.findOneBy({ id });

    const location = await this.locationsRepository.findOneBy({ id: updateSpaceDto.locationId });

    return await this.entityManager.save(new Space({ ...space, ...updateSpaceDto, location }));
  }

  async remove(id: number) {
    await this.spacesRepository.delete(id);
  }
}
