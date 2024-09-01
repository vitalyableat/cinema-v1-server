import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../database/abstract.entity';
import { Place } from '../../places/entities/place.entity';
import { SessionPlace } from '../../session-places/entities/session-place.entity';
import { Session } from '../../sessions/entities/session.entity';
import { Space } from '../../spaces/entities/space.entity';

@Entity()
export class Lounge extends AbstractEntity<Lounge> {
  @Column()
  name: string;

  @ManyToOne(() => Space, (space) => space.lounges)
  space: Space;

  @OneToMany(() => SessionPlace, (sessionPlace) => sessionPlace.lounge)
  sessionPlaces: SessionPlace[];

  @OneToMany(() => Place, (place) => place.lounge, { cascade: true })
  places: Place[];

  @OneToMany(() => Session, (session) => session.lounge)
  sessions: Session[];
}
