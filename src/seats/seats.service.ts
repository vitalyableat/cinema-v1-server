import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { BucketsEnum } from '../config/enums/buckets.enum';
import { FilesService } from '../files/files.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { Seat } from './entities/seat.entity';

@Injectable()
export class SeatsService {
  constructor(
    @InjectRepository(Seat)
    private readonly seatsRepository: Repository<Seat>,
    private readonly entityManager: EntityManager,
    private readonly filesService: FilesService,
  ) {}

  async create(createSeatDto: CreateSeatDto): Promise<Seat> {
    let img = '';

    if (createSeatDto.img) {
      img = await this.filesService.uploadFile(BucketsEnum.SEATS, createSeatDto.img);
    }

    const seat = new Seat({ ...createSeatDto, img });

    return await this.entityManager.save(seat);
  }

  async findAll(): Promise<Seat[]> {
    return await this.seatsRepository.find();
  }

  async update(id: number, updateSeatDto: UpdateSeatDto): Promise<Seat> {
    let img = '';
    const seat = await this.seatsRepository.findOneBy({ id });

    if (seat.img) {
      await this.filesService.removeFile(seat.img);
    }

    if (updateSeatDto.img) {
      img = await this.filesService.uploadFile(BucketsEnum.SEATS, updateSeatDto.img);
    }

    return await this.entityManager.save(new Seat({ ...seat, ...updateSeatDto, img }));
  }

  async remove(id: number) {
    const seat = await this.seatsRepository.findOneBy({ id });

    if (seat.img) {
      await this.filesService.removeFile(seat.img);
    }

    await this.seatsRepository.delete(id);
  }
}
