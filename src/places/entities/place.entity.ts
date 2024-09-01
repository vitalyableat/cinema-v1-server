import { Column, Entity, ManyToOne } from 'typeorm';

import { AbstractEntity } from '../../database/abstract.entity';
import { Lounge } from '../../lounges/entities/lounge.entity';
import { Seat } from '../../seats/entities/seat.entity';

@Entity()
export class Place extends AbstractEntity<Place> {
  @Column()
  row: number;

  @Column()
  column: number;

  @ManyToOne(() => Seat, (seat) => seat.places)
  seat: Seat;

  @ManyToOne(() => Lounge, (lounge) => lounge.places)
  lounge: Lounge;
}
