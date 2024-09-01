import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoungesService } from './lounges.service';
import { CreateLoungeDto } from './dto/create-lounge.dto';
import { UpdateLoungeDto } from './dto/update-lounge.dto';

@Controller('lounges')
export class LoungesController {
  constructor(private readonly loungesService: LoungesService) {}

  @Post()
  create(@Body() createLoungeDto: CreateLoungeDto) {
    return this.loungesService.create(createLoungeDto);
  }

  @Get()
  findAll() {
    return this.loungesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loungesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoungeDto: UpdateLoungeDto) {
    return this.loungesService.update(+id, updateLoungeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loungesService.remove(+id);
  }
}
