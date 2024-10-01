import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateTranslationDto } from './dto/create-translation.dto';
import { UpdateTranslationDto } from './dto/update-translation.dto';
import { Translation } from './entities/translation.entity';
import { TranslationsService } from './translations.service';

@Controller('translations')
export class TranslationsController {
  constructor(private readonly translationsService: TranslationsService) {}

  @Post()
  create(@Body() createTranslationDto: CreateTranslationDto): Promise<Translation> {
    return this.translationsService.create(createTranslationDto);
  }

  @Get(':key')
  findOne(@Param('key') key: string): Promise<Translation> {
    return this.translationsService.findOne(key);
  }

  @Patch(':key')
  update(@Param('key') key: string, @Body() updateTranslationDto: UpdateTranslationDto): Promise<Translation> {
    return this.translationsService.update(key, updateTranslationDto);
  }

  @Delete(':key')
  remove(@Param('key') key: string) {
    return this.translationsService.remove(key);
  }
}
