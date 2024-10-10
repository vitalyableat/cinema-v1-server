import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AudioTechnologiesModule } from './audio-technologies/audio-technologies.module';
import { DatabaseModule } from './database/database.module';
import { FilesModule } from './files/files.module';
import { GenresModule } from './genres/genres.module';
import { LanguagesModule } from './languages/languages.module';
import { LocationsModule } from './locations/locations.module';
import { LoungesModule } from './lounges/lounges.module';
import { PlacesModule } from './places/places.module';
import { SeatsModule } from './seats/seats.module';
import { SessionPlacesModule } from './session-places/session-places.module';
import { SessionsModule } from './sessions/sessions.module';
import { ShowPhotosModule } from './show-photos/show-photos.module';
import { ShowTypesModule } from './show-types/show-types.module';
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
    AudioTechnologiesModule,
    DatabaseModule,
    FilesModule,
    GenresModule,
    LanguagesModule,
    LocationsModule,
    LoungesModule,
    PlacesModule,
    SeatsModule,
    SessionPlacesModule,
    SessionsModule,
    ShowPhotosModule,
    ShowTypesModule,
    ShowsModule,
    SpacesModule,
    TicketsModule,
    TranslationLanguagesModule,
    TranslationsModule,
    UsersModule,
    VideoTechnologiesModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
