import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AudioTechnologiesModule } from './audio-technologies/audio-technologies.module';
import { DatabaseModule } from './database/database.module';
import { GenresModule } from './genres/genres.module';
import { LanguagesModule } from './languages/languages.module';
import { LocationsModule } from './locations/locations.module';
import { LoungesModule } from './lounges/lounges.module';
import { PlacesModule } from './places/places.module';
import { SeatsModule } from './seats/seats.module';
import { SessionPlacesModule } from './session-places/session-places.module';
import { SessionsModule } from './sessions/sessions.module';
import { ShowPhotosModule } from './show-photos/show-photos.module';
import { ShowTypeModule } from './show-type/show-type.module';
import { ShowsModule } from './shows/shows.module';
import { SpacesModule } from './spaces/spaces.module';
import { TicketsModule } from './tickets/tickets.module';
import { TranslationLanguagesModule } from './translation-languages/translation-languages.module';
import { TranslationsModule } from './translations/translations.module';
import { UsersModule } from './users/users.module';
import { VideoTechnologiesModule } from './video-technologies/video-technologies.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UsersModule,
    TicketsModule,
    PlacesModule,
    SessionPlacesModule,
    SessionsModule,
    SeatsModule,
    LoungesModule,
    SpacesModule,
    LocationsModule,
    ShowsModule,
    TranslationsModule,
    TranslationLanguagesModule,
    GenresModule,
    AudioTechnologiesModule,
    VideoTechnologiesModule,
    LanguagesModule,
    ShowTypeModule,
    ShowPhotosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
