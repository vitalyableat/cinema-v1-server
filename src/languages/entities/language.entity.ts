import { Column, Entity, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../database/abstract.entity';
import { Session } from '../../sessions/entities/session.entity';

@Entity()
export class Language extends AbstractEntity<Language> {
  @Column()
  name: string;

  @Column()
  locale: string;

  @OneToMany(() => Session, (session) => session.language)
  sessions: Session[];
}
