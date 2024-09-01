import { PartialType } from '@nestjs/mapped-types';
import { CreateLoungeDto } from './create-lounge.dto';

export class UpdateLoungeDto extends PartialType(CreateLoungeDto) {}
