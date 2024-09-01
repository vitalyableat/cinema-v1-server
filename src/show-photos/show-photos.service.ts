import { Injectable } from '@nestjs/common';
import { CreateShowPhotoDto } from './dto/create-show-photo.dto';
import { UpdateShowPhotoDto } from './dto/update-show-photo.dto';

@Injectable()
export class ShowPhotosService {
  create(createShowPhotoDto: CreateShowPhotoDto) {
    return 'This action adds a new showPhoto';
  }

  findAll() {
    return `This action returns all showPhotos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} showPhoto`;
  }

  update(id: number, updateShowPhotoDto: UpdateShowPhotoDto) {
    return `This action updates a #${id} showPhoto`;
  }

  remove(id: number) {
    return `This action removes a #${id} showPhoto`;
  }
}
