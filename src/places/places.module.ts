import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LoungesModule } from '../lounges/lounges.module';
import { SeatsModule } from '../seats/seats.module';
import { Place } from './entities/place.entity';
import { PlacesController } from './places.controller';
import { PlacesService } from './places.service';

@Module({
  imports: [TypeOrmModule.forFeature([Place]), LoungesModule, SeatsModule],
  controllers: [PlacesController],
  providers: [PlacesService],
  exports: [TypeOrmModule],
})
export class PlacesModule {}
