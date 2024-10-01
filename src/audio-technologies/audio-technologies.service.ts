import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { CreateAudioTechnologyDto } from './dto/create-audio-technology.dto';
import { UpdateAudioTechnologyDto } from './dto/update-audio-technology.dto';
import { AudioTechnology } from './entities/audio-technology.entity';

@Injectable()
export class AudioTechnologiesService {
  constructor(
    @InjectRepository(AudioTechnology)
    private readonly audioTechnologiesRepository: Repository<AudioTechnology>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createAudioTechnologyDto: CreateAudioTechnologyDto): Promise<AudioTechnology> {
    const audioTechnology = new AudioTechnology(createAudioTechnologyDto);

    return await this.entityManager.save(audioTechnology);
  }

  async findAll(): Promise<AudioTechnology[]> {
    return await this.audioTechnologiesRepository.find();
  }

  async update(id: number, updateAudioTechnologyDto: UpdateAudioTechnologyDto): Promise<AudioTechnology> {
    const audioTechnology = await this.audioTechnologiesRepository.findOneBy({ id });

    return await this.entityManager.save(new AudioTechnology({ ...audioTechnology, ...updateAudioTechnologyDto }));
  }

  async remove(id: number) {
    await this.audioTechnologiesRepository.delete(id);
  }
}
