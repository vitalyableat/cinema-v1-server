import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { AudioTechnology } from '../audio-technologies/entities/audio-technology.entity';
import { Language } from '../languages/entities/language.entity';
import { Lounge } from '../lounges/entities/lounge.entity';
import { Place } from '../places/entities/place.entity';
import { SessionPlacesService } from '../session-places/session-places.service';
import { Show } from '../shows/entities/show.entity';
import { TicketsService } from '../tickets/tickets.service';
import { VideoTechnology } from '../video-technologies/entities/video-technology.entity';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { Session } from './entities/session.entity';

@Injectable()
export class SessionsService {
  constructor(
    @InjectRepository(Session)
    private readonly sessionsRepository: Repository<Session>,
    @InjectRepository(VideoTechnology)
    private readonly videoTechnologiesRepository: Repository<VideoTechnology>,
    @InjectRepository(AudioTechnology)
    private readonly audioTechnologiesRepository: Repository<AudioTechnology>,
    @InjectRepository(Language)
    private readonly languagesRepository: Repository<Language>,
    @InjectRepository(Show)
    private readonly showsRepository: Repository<Show>,
    @InjectRepository(Lounge)
    private readonly loungesRepository: Repository<Lounge>,
    @InjectRepository(Place)
    private readonly placesRepository: Repository<Place>,
    private readonly entityManager: EntityManager,
    private readonly sessionPlacesService: SessionPlacesService,
    private readonly ticketsService: TicketsService,
  ) {}

  async create(createSessionDto: CreateSessionDto): Promise<Session> {
    const videoTechnology = await this.videoTechnologiesRepository.findOneBy({
      id: createSessionDto.videoTechnologyId,
    });
    const audioTechnology = await this.audioTechnologiesRepository.findOneBy({
      id: createSessionDto.audioTechnologyId,
    });
    const language = await this.languagesRepository.findOneBy({ id: createSessionDto.languageId });
    const show = await this.showsRepository.findOneBy({ id: createSessionDto.showId });
    const lounge = await this.loungesRepository.findOneBy({ id: createSessionDto.loungeId });

    const loungePlaces = await this.placesRepository.find({ where: { lounge }, relations: { seat: true } });

    return await this.entityManager.transaction(async () => {
      const session = await this.entityManager.save(
        new Session({ ...createSessionDto, videoTechnology, audioTechnology, language, show, lounge }),
      );

      const sessionPlaces = await Promise.all(
        loungePlaces.map(({ row, column, seat }) =>
          this.sessionPlacesService.create({
            row,
            column,
            sessionId: session.id,
            loungeId: lounge.id,
            seatId: seat.id,
          }),
        ),
      );

      await Promise.all(sessionPlaces.map((place) => this.ticketsService.create({ place, session })));

      return session;
    });
  }

  async findAll(): Promise<Session[]> {
    return await this.sessionsRepository.find();
  }

  async findOne(id: number): Promise<Session> {
    return await this.sessionsRepository.findOne({
      where: { id },
      relations: {
        videoTechnology: true,
        audioTechnology: true,
        language: true,
        show: true,
        lounge: true,
        tickets: true,
      },
    });
  }

  async update(id: number, updateSessionDto: UpdateSessionDto): Promise<Session> {
    const session = await this.sessionsRepository.findOneBy({ id });

    const videoTechnology = await this.videoTechnologiesRepository.findOneBy({
      id: updateSessionDto.videoTechnologyId,
    });
    const audioTechnology = await this.audioTechnologiesRepository.findOneBy({
      id: updateSessionDto.audioTechnologyId,
    });
    const language = await this.languagesRepository.findOneBy({ id: updateSessionDto.languageId });
    const show = await this.showsRepository.findOneBy({ id: updateSessionDto.showId });
    const lounge = await this.loungesRepository.findOneBy({ id: updateSessionDto.loungeId });

    return await this.entityManager.save(
      new Session({ ...session, ...updateSessionDto, videoTechnology, audioTechnology, language, show, lounge }),
    );
  }

  async remove(id: number) {
    await this.sessionsRepository.delete(id);
  }
}
