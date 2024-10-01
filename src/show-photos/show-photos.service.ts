import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { CreateShowPhotoDto } from './dto/create-show-photo.dto';
import { ShowPhoto } from './entities/show-photo.entity';

@Injectable()
export class ShowPhotosService {
  constructor(
    @InjectRepository(ShowPhoto)
    private readonly showPhotosRepository: Repository<ShowPhoto>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createShowPhotoDto: CreateShowPhotoDto): Promise<ShowPhoto> {
    const showPhoto = new ShowPhoto(createShowPhotoDto);

    return await this.entityManager.save(showPhoto);
  }

  async remove(id: number) {
    await this.showPhotosRepository.delete(id);
  }
}
