import { Controller, Get, Param, StreamableFile } from '@nestjs/common';

import { FilesService } from './files.service';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Get(':path(*)')
  async findOne(@Param('path') path: string) {
    return new StreamableFile(await this.filesService.getFile(path));
  }
}
