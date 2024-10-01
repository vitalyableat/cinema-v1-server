import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { Seat } from './entities/seat.entity';

@Injectable()
export class SeatsService {
  constructor(
    @InjectRepository(Seat)
    private readonly seatsRepository: Repository<Seat>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createSeatDto: CreateSeatDto): Promise<Seat> {
    const seat = new Seat(createSeatDto);

    return await this.entityManager.save(seat);
  }

  async findAll(): Promise<Seat[]> {
    return await this.seatsRepository.find();
  }

  async update(id: number, updateSeatDto: UpdateSeatDto): Promise<Seat> {
    const seat = await this.seatsRepository.findOneBy({ id });

    return await this.entityManager.save(new Seat({ ...seat, ...updateSeatDto }));
  }

  async remove(id: number) {
    await this.seatsRepository.delete(id);
  }
}
