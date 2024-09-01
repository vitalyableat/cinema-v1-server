import { PartialType } from '@nestjs/mapped-types';
import { CreateVideoTechnologyDto } from './create-video-technology.dto';

export class UpdateVideoTechnologyDto extends PartialType(CreateVideoTechnologyDto) {}
