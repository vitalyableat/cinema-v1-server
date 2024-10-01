import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateVideoTechnologyDto } from './dto/create-video-technology.dto';
import { UpdateVideoTechnologyDto } from './dto/update-video-technology.dto';
import { VideoTechnology } from './entities/video-technology.entity';
import { VideoTechnologiesService } from './video-technologies.service';

@Controller('video-technologies')
export class VideoTechnologiesController {
  constructor(private readonly videoTechnologiesService: VideoTechnologiesService) {}

  @Post()
  create(@Body() createVideoTechnologyDto: CreateVideoTechnologyDto): Promise<VideoTechnology> {
    return this.videoTechnologiesService.create(createVideoTechnologyDto);
  }

  @Get()
  findAll(): Promise<VideoTechnology[]> {
    return this.videoTechnologiesService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVideoTechnologyDto: UpdateVideoTechnologyDto,
  ): Promise<VideoTechnology> {
    return this.videoTechnologiesService.update(+id, updateVideoTechnologyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videoTechnologiesService.remove(+id);
  }
}
