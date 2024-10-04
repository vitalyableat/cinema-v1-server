import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { Space } from '../spaces/entities/space.entity';
import { CreateLoungeDto } from './dto/create-lounge.dto';
import { UpdateLoungeDto } from './dto/update-lounge.dto';
import { Lounge } from './entities/lounge.entity';

@Injectable()
export class LoungesService {
  constructor(
    @InjectRepository(Lounge)
    private readonly loungesRepository: Repository<Lounge>,
    @InjectRepository(Space)
    private readonly spacesRepository: Repository<Space>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createLoungeDto: CreateLoungeDto): Promise<Lounge> {
    const space = await this.spacesRepository.findOneBy({ id: createLoungeDto.spaceId });

    return await this.entityManager.save(new Lounge({ ...createLoungeDto, space }));
  }

  async findAll(): Promise<Lounge[]> {
    return await this.loungesRepository.find();
  }

  async findOne(id: number): Promise<Lounge> {
    return await this.loungesRepository.findOne({ where: { id }, relations: { places: true } });
  }

  async update(id: number, updateLoungeDto: UpdateLoungeDto): Promise<Lounge> {
    const lounge = await this.loungesRepository.findOneBy({ id });

    const space = await this.spacesRepository.findOneBy({ id: updateLoungeDto.spaceId });

    return await this.entityManager.save(new Lounge({ ...lounge, ...updateLoungeDto, space }));
  }

  async remove(id: number) {
    await this.loungesRepository.delete(id);
  }
}
