import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { AbstractEntity } from '../../database/abstract.entity';
import { Lounge } from '../../lounges/entities/lounge.entity';
import { Seat } from '../../seats/entities/seat.entity';
import { Session } from '../../sessions/entities/session.entity';

@Entity()
export class SessionPlace extends AbstractEntity<SessionPlace> {
  @Column()
  available: boolean;

  @Column()
  row: number;

  @Column()
  column: number;

  @Column({ type: 'decimal', scale: 2 })
  price: number;

  @ManyToOne(() => Session)
  session: Session;

  @ManyToOne(() => Lounge, (lounge) => lounge.sessionPlaces)
  lounge: Lounge;

  @ManyToOne(() => Seat, (seat) => seat.sessionPlaces)
  seat: Seat;
}
