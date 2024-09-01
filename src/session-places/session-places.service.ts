import { Injectable } from '@nestjs/common';
import { CreateSessionPlaceDto } from './dto/create-session-place.dto';
import { UpdateSessionPlaceDto } from './dto/update-session-place.dto';

@Injectable()
export class SessionPlacesService {
  create(createSessionPlaceDto: CreateSessionPlaceDto) {
    return 'This action adds a new sessionPlace';
  }

  findAll() {
    return `This action returns all sessionPlaces`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sessionPlace`;
  }

  update(id: number, updateSessionPlaceDto: UpdateSessionPlaceDto) {
    return `This action updates a #${id} sessionPlace`;
  }

  remove(id: number) {
    return `This action removes a #${id} sessionPlace`;
  }
}
