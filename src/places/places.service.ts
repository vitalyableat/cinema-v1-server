import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { Place } from './entities/place.entity';

@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(Place)
    private readonly placesRepository: Repository<Place>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createPlaceDto: CreatePlaceDto): Promise<Place> {
    const place = new Place(createPlaceDto);

    return await this.entityManager.save(place);
  }

  async update(id: number, updatePlaceDto: UpdatePlaceDto): Promise<Place> {
    const place = await this.placesRepository.findOneBy({ id });

    return await this.entityManager.save(new Place({ ...place, ...updatePlaceDto }));
  }

  async remove(id: number) {
    await this.placesRepository.delete(id);
  }
}
