import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { Seat } from './entities/seat.entity';
import { SeatsService } from './seats.service';

@Controller('seats')
export class SeatsController {
  constructor(private readonly seatsService: SeatsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('img'))
  create(@UploadedFile() img: Express.Multer.File, @Body() createSeatDto: CreateSeatDto): Promise<Seat> {
    return this.seatsService.create({ ...createSeatDto, img });
  }

  @Get()
  findAll(): Promise<Seat[]> {
    return this.seatsService.findAll();
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('img'))
  update(
    @Param('id') id: string,
    @UploadedFile() img: Express.Multer.File,
    @Body() updateSeatDto: UpdateSeatDto,
  ): Promise<Seat> {
    return this.seatsService.update(+id, { ...updateSeatDto, img });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seatsService.remove(+id);
  }
}
