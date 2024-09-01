import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';

import { AudioTechnology } from './src/audio-technologies/entities/audio-technology.entity';
import { Genre } from './src/genres/entities/genre.entity';
import { Language } from './src/languages/entities/language.entity';
import { Location } from './src/locations/entities/location.entity';
import { Lounge } from './src/lounges/entities/lounge.entity';
import { Place } from './src/places/entities/place.entity';
import { Seat } from './src/seats/entities/seat.entity';
import { SessionPlace } from './src/session-places/entities/session-place.entity';
import { Session } from './src/sessions/entities/session.entity';
import { ShowPhoto } from './src/show-photos/entities/show-photo.entity';
import { ShowType } from './src/show-type/entities/show-type.entity';
import { Show } from './src/shows/entities/show.entity';
import { Space } from './src/spaces/entities/space.entity';
import { Ticket } from './src/tickets/entities/ticket.entity';
import { TranslationLanguage } from './src/translation-languages/entities/translation-language.entity';
import { Translation } from './src/translations/entities/translation.entity';
import { User } from './src/users/entities/user.entity';
import { VideoTechnology } from './src/video-technologies/entities/video-technology.entity';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.getOrThrow('POSTGRES_HOST'),
  port: configService.getOrThrow('POSTGRES_PORT'),
  username: configService.getOrThrow('POSTGRES_USER'),
  password: configService.getOrThrow('POSTGRES_PASSWORD'),
  database: configService.getOrThrow('POSTGRES_DB'),
  migrations: ['migrations/**'],
  entities: [
    AudioTechnology,
    Genre,
    Language,
    Location,
    Lounge,
    Place,
    Seat,
    SessionPlace,
    Session,
    ShowPhoto,
    ShowType,
    Show,
    Space,
    Ticket,
    TranslationLanguage,
    Translation,
    User,
    VideoTechnology,
  ],
});
