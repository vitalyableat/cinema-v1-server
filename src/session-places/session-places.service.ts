import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { CreateSessionPlaceDto } from './dto/create-session-place.dto';
import { UpdateSessionPlaceDto } from './dto/update-session-place.dto';
import { SessionPlace } from './entities/session-place.entity';

@Injectable()
export class SessionPlacesService {
  constructor(
    @InjectRepository(SessionPlace)
    private readonly sessionPlacesRepository: Repository<SessionPlace>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createSessionPlaceDto: CreateSessionPlaceDto): Promise<SessionPlace> {
    const sessionPlace = new SessionPlace({ ...createSessionPlaceDto, available: true });

    return await this.entityManager.save(sessionPlace);
  }

  async update(id: number, updateSessionPlaceDto: UpdateSessionPlaceDto): Promise<SessionPlace> {
    const sessionPlace = await this.sessionPlacesRepository.findOneBy({ id });

    return await this.entityManager.save(new SessionPlace({ ...sessionPlace, ...updateSessionPlaceDto }));
  }

  async remove(id: number) {
    await this.sessionPlacesRepository.delete(id);
  }
}
