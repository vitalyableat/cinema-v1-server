import { Injectable } from '@nestjs/common';
import { CreateTranslationLanguageDto } from './dto/create-translation-language.dto';
import { UpdateTranslationLanguageDto } from './dto/update-translation-language.dto';

@Injectable()
export class TranslationLanguagesService {
  create(createTranslationLanguageDto: CreateTranslationLanguageDto) {
    return 'This action adds a new translationLanguage';
  }

  findAll() {
    return `This action returns all translationLanguages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} translationLanguage`;
  }

  update(id: number, updateTranslationLanguageDto: UpdateTranslationLanguageDto) {
    return `This action updates a #${id} translationLanguage`;
  }

  remove(id: number) {
    return `This action removes a #${id} translationLanguage`;
  }
}
