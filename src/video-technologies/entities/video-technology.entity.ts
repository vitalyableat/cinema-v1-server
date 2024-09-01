import { Column, Entity, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../database/abstract.entity';
import { Session } from '../../sessions/entities/session.entity';

@Entity()
export class VideoTechnology extends AbstractEntity<VideoTechnology> {
  @Column()
  name: string;

  @OneToMany(() => Session, (session) => session.videoTechnology)
  sessions: Session[];
}
