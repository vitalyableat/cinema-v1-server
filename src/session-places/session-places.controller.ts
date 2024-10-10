import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';

import { CreateSessionPlaceDto } from './dto/create-session-place.dto';
import { UpdateSessionPlaceDto } from './dto/update-session-place.dto';
import { SessionPlace } from './entities/session-place.entity';
import { SessionPlacesService } from './session-places.service';

@Controller('session-places')
export class SessionPlacesController {
  constructor(private readonly sessionPlacesService: SessionPlacesService) {}

  @Post()
  create(@Body() createSessionPlaceDto: CreateSessionPlaceDto): Promise<SessionPlace> {
    return this.sessionPlacesService.create(createSessionPlaceDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSessionPlaceDto: UpdateSessionPlaceDto): Promise<SessionPlace> {
    return this.sessionPlacesService.update(+id, updateSessionPlaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sessionPlacesService.remove(+id);
  }
}
