import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AudioTechnologiesService } from './audio-technologies.service';
import { CreateAudioTechnologyDto } from './dto/create-audio-technology.dto';
import { UpdateAudioTechnologyDto } from './dto/update-audio-technology.dto';

@Controller('audio-technologies')
export class AudioTechnologiesController {
  constructor(private readonly audioTechnologiesService: AudioTechnologiesService) {}

  @Post()
  create(@Body() createAudioTechnologyDto: CreateAudioTechnologyDto) {
    return this.audioTechnologiesService.create(createAudioTechnologyDto);
  }

  @Get()
  findAll() {
    return this.audioTechnologiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.audioTechnologiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAudioTechnologyDto: UpdateAudioTechnologyDto) {
    return this.audioTechnologiesService.update(+id, updateAudioTechnologyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.audioTechnologiesService.remove(+id);
  }
}
