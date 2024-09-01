import { PartialType } from '@nestjs/mapped-types';
import { CreateAudioTechnologyDto } from './create-audio-technology.dto';

export class UpdateAudioTechnologyDto extends PartialType(CreateAudioTechnologyDto) {}
