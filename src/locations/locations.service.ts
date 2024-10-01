import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Location } from './entities/location.entity';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private readonly locationsRepository: Repository<Location>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createLocationDto: CreateLocationDto): Promise<Location> {
    const location = new Location(createLocationDto);

    return await this.entityManager.save(location);
  }

  async findAll(): Promise<Location[]> {
    return await this.locationsRepository.find();
  }

  async findOne(id: number): Promise<Location> {
    return await this.locationsRepository.findOne({ where: { id }, relations: { spaces: true } });
  }

  async update(id: number, updateLocationDto: UpdateLocationDto): Promise<Location> {
    const location = await this.locationsRepository.findOneBy({ id });

    return await this.entityManager.save(new Location({ ...location, ...updateLocationDto }));
  }

  async remove(id: number) {
    await this.locationsRepository.delete(id);
  }
}
