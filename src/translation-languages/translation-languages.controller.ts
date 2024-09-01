import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TranslationLanguagesService } from './translation-languages.service';
import { CreateTranslationLanguageDto } from './dto/create-translation-language.dto';
import { UpdateTranslationLanguageDto } from './dto/update-translation-language.dto';

@Controller('translation-languages')
export class TranslationLanguagesController {
  constructor(private readonly translationLanguagesService: TranslationLanguagesService) {}

  @Post()
  create(@Body() createTranslationLanguageDto: CreateTranslationLanguageDto) {
    return this.translationLanguagesService.create(createTranslationLanguageDto);
  }

  @Get()
  findAll() {
    return this.translationLanguagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.translationLanguagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTranslationLanguageDto: UpdateTranslationLanguageDto) {
    return this.translationLanguagesService.update(+id, updateTranslationLanguageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.translationLanguagesService.remove(+id);
  }
}
