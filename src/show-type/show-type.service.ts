import { Injectable } from '@nestjs/common';
import { CreateShowTypeDto } from './dto/create-show-type.dto';
import { UpdateShowTypeDto } from './dto/update-show-type.dto';

@Injectable()
export class ShowTypeService {
  create(createShowTypeDto: CreateShowTypeDto) {
    return 'This action adds a new showType';
  }

  findAll() {
    return `This action returns all showType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} showType`;
  }

  update(id: number, updateShowTypeDto: UpdateShowTypeDto) {
    return `This action updates a #${id} showType`;
  }

  remove(id: number) {
    return `This action removes a #${id} showType`;
  }
}
