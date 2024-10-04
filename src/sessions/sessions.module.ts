import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AudioTechnologiesModule } from '../audio-technologies/audio-technologies.module';
import { LanguagesModule } from '../languages/languages.module';
import { LoungesModule } from '../lounges/lounges.module';
import { PlacesModule } from '../places/places.module';
import { SessionPlacesModule } from '../session-places/session-places.module';
import { ShowsModule } from '../shows/shows.module';
import { TicketsModule } from '../tickets/tickets.module';
import { VideoTechnologiesModule } from '../video-technologies/video-technologies.module';
import { Session } from './entities/session.entity';
import { SessionsController } from './sessions.controller';
import { SessionsService } from './sessions.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Session]),
    VideoTechnologiesModule,
    AudioTechnologiesModule,
    LanguagesModule,
    ShowsModule,
    LoungesModule,
    PlacesModule,
    forwardRef(() => SessionPlacesModule),
    TicketsModule,
  ],
  controllers: [SessionsController],
  providers: [SessionsService],
  exports: [TypeOrmModule],
})
export class SessionsModule {}
