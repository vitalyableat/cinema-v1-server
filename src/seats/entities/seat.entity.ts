import { Column, Entity, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../database/abstract.entity';
import { Place } from '../../places/entities/place.entity';
import { SessionPlace } from '../../session-places/entities/session-place.entity';

@Entity()
export class Seat extends AbstractEntity<Seat> {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: 'decimal', scale: 2 })
  price: number;

  @Column()
  img: string;

  @OneToMany(() => Place, (place) => place.seat, { cascade: true })
  places: Place[];

  @OneToMany(() => SessionPlace, (sessionPlace) => sessionPlace.seat, { cascade: true })
  sessionPlaces: SessionPlace[];
}
