import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FilesModule } from '../files/files.module';
import { ShowsModule } from '../shows/shows.module';
import { ShowPhoto } from './entities/show-photo.entity';
import { ShowPhotosController } from './show-photos.controller';
import { ShowPhotosService } from './show-photos.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShowPhoto]), FilesModule, ShowsModule],
  controllers: [ShowPhotosController],
  providers: [ShowPhotosService],
})
export class ShowPhotosModule {}
