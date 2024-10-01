import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { Session } from './entities/session.entity';

@Injectable()
export class SessionsService {
  constructor(
    @InjectRepository(Session)
    private readonly sessionsRepository: Repository<Session>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createSessionDto: CreateSessionDto): Promise<Session> {
    const session = new Session(createSessionDto);

    return await this.entityManager.save(session);
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

    return await this.entityManager.save(new Session({ ...session, ...updateSessionDto }));
  }

  async remove(id: number) {
    await this.sessionsRepository.delete(id);
  }
}
