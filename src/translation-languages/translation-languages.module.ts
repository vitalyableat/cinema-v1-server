import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TranslationLanguage } from './entities/translation-language.entity';
import { TranslationLanguagesController } from './translation-languages.controller';
import { TranslationLanguagesService } from './translation-languages.service';

@Module({
  imports: [TypeOrmModule.forFeature([TranslationLanguage])],
  controllers: [TranslationLanguagesController],
  providers: [TranslationLanguagesService],
})
export class TranslationLanguagesModule {}
