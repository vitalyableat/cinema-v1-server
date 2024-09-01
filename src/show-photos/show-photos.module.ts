import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ShowPhoto } from './entities/show-photo.entity';
import { ShowPhotosController } from './show-photos.controller';
import { ShowPhotosService } from './show-photos.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShowPhoto])],
  controllers: [ShowPhotosController],
  providers: [ShowPhotosService],
})
export class ShowPhotosModule {}
