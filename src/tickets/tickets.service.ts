import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { User } from '../users/entities/user.entity';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './entities/ticket.entity';
import { TicketStatusEnum } from './enums/ticket-status.enum';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketsRepository: Repository<Ticket>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const ticket = new Ticket({ ...createTicketDto, status: TicketStatusEnum.VALUE });

    return await this.entityManager.save(ticket);
  }

  async findOne(id: number): Promise<Ticket> {
    return await this.ticketsRepository.findOne({
      where: { id },
      relations: { place: true, session: true, user: true },
    });
  }

  async update(id: number, updateTicketDto: UpdateTicketDto): Promise<Ticket> {
    const ticket = await this.ticketsRepository.findOneBy({ id });

    const user = await this.usersRepository.findOneBy({ id: updateTicketDto.userId });

    return await this.entityManager.save(new Ticket({ ...ticket, ...updateTicketDto, user }));
  }
}
