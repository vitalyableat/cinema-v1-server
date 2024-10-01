import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { CreateLoungeDto } from './dto/create-lounge.dto';
import { UpdateLoungeDto } from './dto/update-lounge.dto';
import { Lounge } from './entities/lounge.entity';

@Injectable()
export class LoungesService {
  constructor(
    @InjectRepository(Lounge)
    private readonly loungesRepository: Repository<Lounge>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createLoungeDto: CreateLoungeDto): Promise<Lounge> {
    const lounge = new Lounge(createLoungeDto);

    return await this.entityManager.save(lounge);
  }

  async findAll(): Promise<Lounge[]> {
    return await this.loungesRepository.find();
  }

  async findOne(id: number): Promise<Lounge> {
    return await this.loungesRepository.findOne({ where: { id }, relations: { places: true } });
  }

  async update(id: number, updateLoungeDto: UpdateLoungeDto): Promise<Lounge> {
    const lounge = await this.loungesRepository.findOneBy({ id });

    return await this.entityManager.save(new Lounge({ ...lounge, ...updateLoungeDto }));
  }

  async remove(id: number) {
    await this.loungesRepository.delete(id);
  }
}
