import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FilesModule } from '../files/files.module';
import { Seat } from './entities/seat.entity';
import { SeatsController } from './seats.controller';
import { SeatsService } from './seats.service';

@Module({
  imports: [TypeOrmModule.forFeature([Seat]), FilesModule],
  controllers: [SeatsController],
  providers: [SeatsService],
  exports: [TypeOrmModule],
})
export class SeatsModule {}
