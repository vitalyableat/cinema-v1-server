import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateTranslationLanguageDto } from './dto/create-translation-language.dto';
import { UpdateTranslationLanguageDto } from './dto/update-translation-language.dto';
import { TranslationLanguage } from './entities/translation-language.entity';
import { TranslationLanguagesService } from './translation-languages.service';

@Controller('translation-languages')
export class TranslationLanguagesController {
  constructor(private readonly translationLanguagesService: TranslationLanguagesService) {}

  @Post()
  create(@Body() createTranslationLanguageDto: CreateTranslationLanguageDto): Promise<TranslationLanguage> {
    return this.translationLanguagesService.create(createTranslationLanguageDto);
  }

  @Get()
  findAll(): Promise<TranslationLanguage[]> {
    return this.translationLanguagesService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTranslationLanguageDto: UpdateTranslationLanguageDto,
  ): Promise<TranslationLanguage> {
    return this.translationLanguagesService.update(+id, updateTranslationLanguageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.translationLanguagesService.remove(+id);
  }
}
