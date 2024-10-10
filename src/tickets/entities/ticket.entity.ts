import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

import { AbstractEntity } from '../../database/abstract.entity';
import { SessionPlace } from '../../session-places/entities/session-place.entity';
import { Session } from '../../sessions/entities/session.entity';
import { User } from '../../users/entities/user.entity';
import { TicketStatusEnum } from '../enums/ticket-status.enum';

@Entity()
export class Ticket extends AbstractEntity<Ticket> {
  @Column()
  status: TicketStatusEnum;

  @OneToOne(() => SessionPlace)
  @JoinColumn()
  place: SessionPlace;

  @ManyToOne(() => Session, (session) => session.tickets)
  session: Session;

  @ManyToOne(() => User, (user) => user.tickets)
  user: User;
}
