import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { ParseMultipartFormDataPipe } from '../pipes/parse-multipart-form-data.pipe';
import { CreateShowDto } from './dto/create-show.dto';
import { UpdateShowDto } from './dto/update-show.dto';
import { Show } from './entities/show.entity';
import { ShowsService } from './shows.service';

@Controller('shows')
export class ShowsController {
  constructor(private readonly showsService: ShowsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('preview'))
  create(
    @UploadedFile() preview: Express.Multer.File,
    @Body(ParseMultipartFormDataPipe) createShowDto: CreateShowDto,
  ): Promise<Show> {
    return this.showsService.create({ ...createShowDto, preview });
  }

  @Get()
  findAll(): Promise<Show[]> {
    return this.showsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Show> {
    return this.showsService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('preview'))
  update(
    @Param('id') id: string,
    @UploadedFile() preview: Express.Multer.File,
    @Body(ParseMultipartFormDataPipe) updateShowDto: UpdateShowDto,
  ): Promise<Show> {
    return this.showsService.update(+id, { ...updateShowDto, preview });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.showsService.remove(+id);
  }
}
