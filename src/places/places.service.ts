import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { Lounge } from '../lounges/entities/lounge.entity';
import { Seat } from '../seats/entities/seat.entity';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { Place } from './entities/place.entity';

@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(Place)
    private readonly placesRepository: Repository<Place>,
    @InjectRepository(Lounge)
    private readonly loungesRepository: Repository<Lounge>,
    @InjectRepository(Seat)
    private readonly seatsRepository: Repository<Seat>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createPlaceDto: CreatePlaceDto): Promise<Place> {
    const lounge = await this.loungesRepository.findOneBy({ id: createPlaceDto.loungeId });
    const seat = await this.seatsRepository.findOneBy({ id: createPlaceDto.seatId });

    return await this.entityManager.save(new Place({ ...createPlaceDto, lounge, seat }));
  }

  async update(id: number, updatePlaceDto: UpdatePlaceDto): Promise<Place> {
    const place = await this.placesRepository.findOneBy({ id });

    const lounge = await this.loungesRepository.findOneBy({ id: updatePlaceDto.loungeId });
    const seat = await this.seatsRepository.findOneBy({ id: updatePlaceDto.seatId });

    return await this.entityManager.save(new Place({ ...place, ...updatePlaceDto, lounge, seat }));
  }

  async remove(id: number) {
    await this.placesRepository.delete(id);
  }
}
