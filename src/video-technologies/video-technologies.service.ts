import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { CreateVideoTechnologyDto } from './dto/create-video-technology.dto';
import { UpdateVideoTechnologyDto } from './dto/update-video-technology.dto';
import { VideoTechnology } from './entities/video-technology.entity';

@Injectable()
export class VideoTechnologiesService {
  constructor(
    @InjectRepository(VideoTechnology)
    private readonly videoTechnologiesRepository: Repository<VideoTechnology>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createVideoTechnologyDto: CreateVideoTechnologyDto): Promise<VideoTechnology> {
    const videoTechnology = new VideoTechnology(createVideoTechnologyDto);

    return await this.entityManager.save(videoTechnology);
  }

  async findAll(): Promise<VideoTechnology[]> {
    return await this.videoTechnologiesRepository.find();
  }

  async update(id: number, updateVideoTechnologyDto: UpdateVideoTechnologyDto): Promise<VideoTechnology> {
    const videoTechnology = await this.videoTechnologiesRepository.findOneBy({ id });

    return await this.entityManager.save(new VideoTechnology({ ...videoTechnology, ...updateVideoTechnologyDto }));
  }

  async remove(id: number) {
    await this.videoTechnologiesRepository.delete(id);
  }
}
