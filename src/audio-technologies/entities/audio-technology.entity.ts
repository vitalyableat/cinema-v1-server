import { Column, Entity, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../database/abstract.entity';
import { Session } from '../../sessions/entities/session.entity';

@Entity()
export class AudioTechnology extends AbstractEntity<AudioTechnology> {
  @Column()
  name: string;

  @OneToMany(() => Session, (session) => session.audioTechnology)
  sessions: Session[];
}
