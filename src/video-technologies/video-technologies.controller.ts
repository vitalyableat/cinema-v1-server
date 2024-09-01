import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VideoTechnologiesService } from './video-technologies.service';
import { CreateVideoTechnologyDto } from './dto/create-video-technology.dto';
import { UpdateVideoTechnologyDto } from './dto/update-video-technology.dto';

@Controller('video-technologies')
export class VideoTechnologiesController {
  constructor(private readonly videoTechnologiesService: VideoTechnologiesService) {}

  @Post()
  create(@Body() createVideoTechnologyDto: CreateVideoTechnologyDto) {
    return this.videoTechnologiesService.create(createVideoTechnologyDto);
  }

  @Get()
  findAll() {
    return this.videoTechnologiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.videoTechnologiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVideoTechnologyDto: UpdateVideoTechnologyDto) {
    return this.videoTechnologiesService.update(+id, updateVideoTechnologyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videoTechnologiesService.remove(+id);
  }
}
