import { PartialType } from '@nestjs/mapped-types';
import { CreateSessionPlaceDto } from './create-session-place.dto';

export class UpdateSessionPlaceDto extends PartialType(CreateSessionPlaceDto) {}
