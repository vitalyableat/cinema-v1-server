import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { AudioTechnologiesService } from './audio-technologies.service';
import { CreateAudioTechnologyDto } from './dto/create-audio-technology.dto';
import { UpdateAudioTechnologyDto } from './dto/update-audio-technology.dto';
import { AudioTechnology } from './entities/audio-technology.entity';

@Controller('audio-technologies')
export class AudioTechnologiesController {
  constructor(private readonly audioTechnologiesService: AudioTechnologiesService) {}

  @Post()
  create(@Body() createAudioTechnologyDto: CreateAudioTechnologyDto): Promise<AudioTechnology> {
    return this.audioTechnologiesService.create(createAudioTechnologyDto);
  }

  @Get()
  findAll(): Promise<AudioTechnology[]> {
    return this.audioTechnologiesService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAudioTechnologyDto: UpdateAudioTechnologyDto,
  ): Promise<AudioTechnology> {
    return this.audioTechnologiesService.update(+id, updateAudioTechnologyDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.audioTechnologiesService.remove(+id);
  }
}
