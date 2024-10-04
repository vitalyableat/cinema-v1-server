import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LoungesModule } from '../lounges/lounges.module';
import { SeatsModule } from '../seats/seats.module';
import { SessionsModule } from '../sessions/sessions.module';
import { SessionPlace } from './entities/session-place.entity';
import { SessionPlacesController } from './session-places.controller';
import { SessionPlacesService } from './session-places.service';

@Module({
  imports: [TypeOrmModule.forFeature([SessionPlace]), forwardRef(() => SessionsModule), LoungesModule, SeatsModule],
  controllers: [SessionPlacesController],
  providers: [SessionPlacesService],
  exports: [SessionPlacesService],
})
export class SessionPlacesModule {}
