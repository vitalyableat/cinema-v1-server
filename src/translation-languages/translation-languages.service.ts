import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { CreateTranslationLanguageDto } from './dto/create-translation-language.dto';
import { UpdateTranslationLanguageDto } from './dto/update-translation-language.dto';
import { TranslationLanguage } from './entities/translation-language.entity';

@Injectable()
export class TranslationLanguagesService {
  constructor(
    @InjectRepository(TranslationLanguage)
    private readonly translationLanguagesRepository: Repository<TranslationLanguage>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createTranslationLanguageDto: CreateTranslationLanguageDto): Promise<TranslationLanguage> {
    const translationLanguage = new TranslationLanguage(createTranslationLanguageDto);

    return await this.entityManager.save(translationLanguage);
  }

  async findAll(): Promise<TranslationLanguage[]> {
    return await this.translationLanguagesRepository.find();
  }

  async update(id: number, updateTranslationLanguageDto: UpdateTranslationLanguageDto): Promise<TranslationLanguage> {
    const translationLanguage = await this.translationLanguagesRepository.findOneBy({ id });

    return await this.entityManager.save(
      new TranslationLanguage({ ...translationLanguage, ...updateTranslationLanguageDto }),
    );
  }

  async remove(id: number) {
    await this.translationLanguagesRepository.delete(id);
  }
}
