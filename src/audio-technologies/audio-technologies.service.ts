import { Injectable } from '@nestjs/common';
import { CreateAudioTechnologyDto } from './dto/create-audio-technology.dto';
import { UpdateAudioTechnologyDto } from './dto/update-audio-technology.dto';

@Injectable()
export class AudioTechnologiesService {
  create(createAudioTechnologyDto: CreateAudioTechnologyDto) {
    return 'This action adds a new audioTechnology';
  }

  findAll() {
    return `This action returns all audioTechnologies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} audioTechnology`;
  }

  update(id: number, updateAudioTechnologyDto: UpdateAudioTechnologyDto) {
    return `This action updates a #${id} audioTechnology`;
  }

  remove(id: number) {
    return `This action removes a #${id} audioTechnology`;
  }
}
