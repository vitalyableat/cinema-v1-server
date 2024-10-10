import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LocationsModule } from '../locations/locations.module';
import { Space } from './entities/space.entity';
import { SpacesController } from './spaces.controller';
import { SpacesService } from './spaces.service';

@Module({
  imports: [TypeOrmModule.forFeature([Space]), LocationsModule],
  controllers: [SpacesController],
  providers: [SpacesService],
  exports: [TypeOrmModule],
})
export class SpacesModule {}
