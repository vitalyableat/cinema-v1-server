import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateShowTypeDto } from './dto/create-show-type.dto';
import { UpdateShowTypeDto } from './dto/update-show-type.dto';
import { ShowType } from './entities/show-type.entity';
import { ShowTypesService } from './show-types.service';

@Controller('show-types')
export class ShowTypesController {
  constructor(private readonly showTypeService: ShowTypesService) {}

  @Post()
  create(@Body() createShowTypeDto: CreateShowTypeDto): Promise<ShowType> {
    return this.showTypeService.create(createShowTypeDto);
  }

  @Get()
  findAll(): Promise<ShowType[]> {
    return this.showTypeService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShowTypeDto: UpdateShowTypeDto): Promise<ShowType> {
    return this.showTypeService.update(+id, updateShowTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.showTypeService.remove(+id);
  }
}
