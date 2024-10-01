import { Body, Controller, Delete, Param, Post } from '@nestjs/common';

import { CreateShowPhotoDto } from './dto/create-show-photo.dto';
import { ShowPhoto } from './entities/show-photo.entity';
import { ShowPhotosService } from './show-photos.service';

@Controller('show-photos')
export class ShowPhotosController {
  constructor(private readonly showPhotosService: ShowPhotosService) {}

  @Post()
  create(@Body() createShowPhotoDto: CreateShowPhotoDto): Promise<ShowPhoto> {
    return this.showPhotosService.create(createShowPhotoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.showPhotosService.remove(+id);
  }
}
