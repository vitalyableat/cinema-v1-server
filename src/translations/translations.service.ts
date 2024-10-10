import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { CreateTranslationDto } from './dto/create-translation.dto';
import { UpdateTranslationDto } from './dto/update-translation.dto';
import { Translation } from './entities/translation.entity';

@Injectable()
export class TranslationsService {
  constructor(
    @InjectRepository(Translation)
    private readonly translationsRepository: Repository<Translation>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createTranslationDto: CreateTranslationDto): Promise<Translation> {
    const translation = new Translation(createTranslationDto);

    return await this.entityManager.save(translation);
  }

  async findOne(key: string): Promise<Translation> {
    return await this.translationsRepository.findOneBy({ key });
  }

  async update(key: string, updateTranslationDto: UpdateTranslationDto): Promise<Translation> {
    return await this.entityManager.save(new Translation({ key, ...updateTranslationDto }));
  }

  async remove(key: string) {
    await this.translationsRepository.delete(key);
  }
}
