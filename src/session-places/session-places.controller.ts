import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SessionPlacesService } from './session-places.service';
import { CreateSessionPlaceDto } from './dto/create-session-place.dto';
import { UpdateSessionPlaceDto } from './dto/update-session-place.dto';

@Controller('session-places')
export class SessionPlacesController {
  constructor(private readonly sessionPlacesService: SessionPlacesService) {}

  @Post()
  create(@Body() createSessionPlaceDto: CreateSessionPlaceDto) {
    return this.sessionPlacesService.create(createSessionPlaceDto);
  }

  @Get()
  findAll() {
    return this.sessionPlacesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sessionPlacesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSessionPlaceDto: UpdateSessionPlaceDto) {
    return this.sessionPlacesService.update(+id, updateSessionPlaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sessionPlacesService.remove(+id);
  }
}
