import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateLoungeDto } from './dto/create-lounge.dto';
import { UpdateLoungeDto } from './dto/update-lounge.dto';
import { Lounge } from './entities/lounge.entity';
import { LoungesService } from './lounges.service';

@Controller('lounges')
export class LoungesController {
  constructor(private readonly loungesService: LoungesService) {}

  @Post()
  create(@Body() createLoungeDto: CreateLoungeDto): Promise<Lounge> {
    return this.loungesService.create(createLoungeDto);
  }

  @Get()
  findAll(): Promise<Lounge[]> {
    return this.loungesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Lounge> {
    return this.loungesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoungeDto: UpdateLoungeDto): Promise<Lounge> {
    return this.loungesService.update(+id, updateLoungeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loungesService.remove(+id);
  }
}
