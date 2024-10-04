import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VideoTechnology } from './entities/video-technology.entity';
import { VideoTechnologiesController } from './video-technologies.controller';
import { VideoTechnologiesService } from './video-technologies.service';

@Module({
  imports: [TypeOrmModule.forFeature([VideoTechnology])],
  controllers: [VideoTechnologiesController],
  providers: [VideoTechnologiesService],
  exports: [TypeOrmModule],
})
export class VideoTechnologiesModule {}
