import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { Lounge } from '../lounges/entities/lounge.entity';
import { Seat } from '../seats/entities/seat.entity';
import { Session } from '../sessions/entities/session.entity';
import { CreateSessionPlaceDto } from './dto/create-session-place.dto';
import { UpdateSessionPlaceDto } from './dto/update-session-place.dto';
import { SessionPlace } from './entities/session-place.entity';

@Injectable()
export class SessionPlacesService {
  constructor(
    @InjectRepository(SessionPlace)
    private readonly sessionPlacesRepository: Repository<SessionPlace>,
    @InjectRepository(Session)
    private readonly sessionsRepository: Repository<Session>,
    @InjectRepository(Lounge)
    private readonly loungesRepository: Repository<Lounge>,
    @InjectRepository(Seat)
    private readonly seatsRepository: Repository<Seat>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createSessionPlaceDto: CreateSessionPlaceDto): Promise<SessionPlace> {
    const session = await this.sessionsRepository.findOneBy({ id: createSessionPlaceDto.sessionId });
    const lounge = await this.loungesRepository.findOneBy({ id: createSessionPlaceDto.loungeId });
    const seat = await this.seatsRepository.findOneBy({ id: createSessionPlaceDto.seatId });

    return await this.entityManager.save(
      new SessionPlace({
        ...createSessionPlaceDto,
        available: true,
        session,
        lounge,
        seat,
        price: createSessionPlaceDto.price ?? seat.price,
      }),
    );
  }

  async update(id: number, updateSessionPlaceDto: UpdateSessionPlaceDto): Promise<SessionPlace> {
    const sessionPlace = await this.sessionPlacesRepository.findOneBy({ id });

    const session = await this.sessionsRepository.findOneBy({ id: updateSessionPlaceDto.sessionId });
    const lounge = await this.loungesRepository.findOneBy({ id: updateSessionPlaceDto.loungeId });
    const seat = await this.seatsRepository.findOneBy({ id: updateSessionPlaceDto.seatId });

    return await this.entityManager.save(
      new SessionPlace({ ...sessionPlace, ...updateSessionPlaceDto, session, lounge, seat }),
    );
  }

  async remove(id: number) {
    await this.sessionPlacesRepository.delete(id);
  }
}
