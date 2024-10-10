import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { Language } from './entities/language.entity';

@Injectable()
export class LanguagesService {
  constructor(
    @InjectRepository(Language)
    private readonly languagesRepository: Repository<Language>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createLanguageDto: CreateLanguageDto): Promise<Language> {
    const language = new Language(createLanguageDto);

    return await this.entityManager.save(language);
  }

  async findAll(): Promise<Language[]> {
    return await this.languagesRepository.find();
  }

  async update(id: number, updateLanguageDto: UpdateLanguageDto): Promise<Language> {
    const language = await this.languagesRepository.findOneBy({ id });

    return await this.entityManager.save(new Language({ ...language, ...updateLanguageDto }));
  }

  async remove(id: number) {
    await this.languagesRepository.delete(id);
  }
}
