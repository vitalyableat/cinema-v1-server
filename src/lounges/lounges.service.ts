import { Injectable } from '@nestjs/common';
import { CreateLoungeDto } from './dto/create-lounge.dto';
import { UpdateLoungeDto } from './dto/update-lounge.dto';

@Injectable()
export class LoungesService {
  create(createLoungeDto: CreateLoungeDto) {
    return 'This action adds a new lounge';
  }

  findAll() {
    return `This action returns all lounges`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lounge`;
  }

  update(id: number, updateLoungeDto: UpdateLoungeDto) {
    return `This action updates a #${id} lounge`;
  }

  remove(id: number) {
    return `This action removes a #${id} lounge`;
  }
}
