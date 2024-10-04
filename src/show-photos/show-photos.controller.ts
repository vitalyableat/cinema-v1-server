import { Body, Controller, Delete, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { CreateShowPhotoDto } from './dto/create-show-photo.dto';
import { ShowPhoto } from './entities/show-photo.entity';
import { ShowPhotosService } from './show-photos.service';

@Controller('show-photos')
export class ShowPhotosController {
  constructor(private readonly showPhotosService: ShowPhotosService) {}

  @Post()
  @UseInterceptors(FileInterceptor('img'))
  create(@UploadedFile() img: Express.Multer.File, @Body() createShowPhotoDto: CreateShowPhotoDto): Promise<ShowPhoto> {
    return this.showPhotosService.create({ ...createShowPhotoDto, img });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.showPhotosService.remove(+id);
  }
}
