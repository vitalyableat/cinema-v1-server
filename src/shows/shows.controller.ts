import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateShowDto } from './dto/create-show.dto';
import { UpdateShowDto } from './dto/update-show.dto';
import { Show } from './entities/show.entity';
import { ShowsService } from './shows.service';

@Controller('shows')
export class ShowsController {
  constructor(private readonly showsService: ShowsService) {}

  @Post()
  create(@Body() createShowDto: CreateShowDto): Promise<Show> {
    return this.showsService.create(createShowDto);
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
  update(@Param('id') id: string, @Body() updateShowDto: UpdateShowDto): Promise<Show> {
    return this.showsService.update(+id, updateShowDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.showsService.remove(+id);
  }
}
