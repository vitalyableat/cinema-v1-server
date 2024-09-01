import { PartialType } from '@nestjs/mapped-types';
import { CreateShowTypeDto } from './create-show-type.dto';

export class UpdateShowTypeDto extends PartialType(CreateShowTypeDto) {}
