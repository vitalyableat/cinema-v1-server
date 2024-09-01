import { Injectable } from '@nestjs/common';
import { CreateVideoTechnologyDto } from './dto/create-video-technology.dto';
import { UpdateVideoTechnologyDto } from './dto/update-video-technology.dto';

@Injectable()
export class VideoTechnologiesService {
  create(createVideoTechnologyDto: CreateVideoTechnologyDto) {
    return 'This action adds a new videoTechnology';
  }

  findAll() {
    return `This action returns all videoTechnologies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} videoTechnology`;
  }

  update(id: number, updateVideoTechnologyDto: UpdateVideoTechnologyDto) {
    return `This action updates a #${id} videoTechnology`;
  }

  remove(id: number) {
    return `This action removes a #${id} videoTechnology`;
  }
}
