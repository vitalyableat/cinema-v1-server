import { PartialType } from '@nestjs/mapped-types';
import { CreateTranslationLanguageDto } from './create-translation-language.dto';

export class UpdateTranslationLanguageDto extends PartialType(CreateTranslationLanguageDto) {}
