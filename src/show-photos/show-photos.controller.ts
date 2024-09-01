import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShowPhotosService } from './show-photos.service';
import { CreateShowPhotoDto } from './dto/create-show-photo.dto';
import { UpdateShowPhotoDto } from './dto/update-show-photo.dto';

@Controller('show-photos')
export class ShowPhotosController {
  constructor(private readonly showPhotosService: ShowPhotosService) {}

  @Post()
  create(@Body() createShowPhotoDto: CreateShowPhotoDto) {
    return this.showPhotosService.create(createShowPhotoDto);
  }

  @Get()
  findAll() {
    return this.showPhotosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.showPhotosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShowPhotoDto: UpdateShowPhotoDto) {
    return this.showPhotosService.update(+id, updateShowPhotoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.showPhotosService.remove(+id);
  }
}
