import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateSpaceDto } from './dto/create-space.dto';
import { UpdateSpaceDto } from './dto/update-space.dto';
import { Space } from './entities/space.entity';
import { SpacesService } from './spaces.service';

@Controller('spaces')
export class SpacesController {
  constructor(private readonly spacesService: SpacesService) {}

  @Post()
  create(@Body() createSpaceDto: CreateSpaceDto): Promise<Space> {
    return this.spacesService.create(createSpaceDto);
  }

  @Get()
  findAll(): Promise<Space[]> {
    return this.spacesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Space> {
    return this.spacesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpaceDto: UpdateSpaceDto): Promise<Space> {
    return this.spacesService.update(+id, updateSpaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spacesService.remove(+id);
  }
}
