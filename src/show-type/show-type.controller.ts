import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShowTypeService } from './show-type.service';
import { CreateShowTypeDto } from './dto/create-show-type.dto';
import { UpdateShowTypeDto } from './dto/update-show-type.dto';

@Controller('show-type')
export class ShowTypeController {
  constructor(private readonly showTypeService: ShowTypeService) {}

  @Post()
  create(@Body() createShowTypeDto: CreateShowTypeDto) {
    return this.showTypeService.create(createShowTypeDto);
  }

  @Get()
  findAll() {
    return this.showTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.showTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShowTypeDto: UpdateShowTypeDto) {
    return this.showTypeService.update(+id, updateShowTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.showTypeService.remove(+id);
  }
}
