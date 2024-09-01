import { PartialType } from '@nestjs/mapped-types';
import { CreateShowPhotoDto } from './create-show-photo.dto';

export class UpdateShowPhotoDto extends PartialType(CreateShowPhotoDto) {}
