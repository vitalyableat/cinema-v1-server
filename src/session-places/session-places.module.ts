import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SessionPlace } from './entities/session-place.entity';
import { SessionPlacesController } from './session-places.controller';
import { SessionPlacesService } from './session-places.service';

@Module({
  imports: [TypeOrmModule.forFeature([SessionPlace])],
  controllers: [SessionPlacesController],
  providers: [SessionPlacesService],
})
export class SessionPlacesModule {}
