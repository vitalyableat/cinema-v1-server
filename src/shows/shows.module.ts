import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AudioTechnologiesModule } from '../audio-technologies/audio-technologies.module';
import { FilesModule } from '../files/files.module';
import { GenresModule } from '../genres/genres.module';
import { LanguagesModule } from '../languages/languages.module';
import { ShowTypesModule } from '../show-types/show-types.module';
import { VideoTechnologiesModule } from '../video-technologies/video-technologies.module';
import { Show } from './entities/show.entity';
import { ShowsController } from './shows.controller';
import { ShowsService } from './shows.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Show]),
    FilesModule,
    ShowTypesModule,
    LanguagesModule,
    GenresModule,
    AudioTechnologiesModule,
    VideoTechnologiesModule,
  ],
  controllers: [ShowsController],
  providers: [ShowsService],
  exports: [TypeOrmModule],
})
export class ShowsModule {}
