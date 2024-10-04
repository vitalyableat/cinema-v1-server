import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AudioTechnologiesController } from './audio-technologies.controller';
import { AudioTechnologiesService } from './audio-technologies.service';
import { AudioTechnology } from './entities/audio-technology.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AudioTechnology])],
  controllers: [AudioTechnologiesController],
  providers: [AudioTechnologiesService],
  exports: [TypeOrmModule],
})
export class AudioTechnologiesModule {}
