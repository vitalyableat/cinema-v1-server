import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../database/abstract.entity';

@Entity()
export class Genre extends AbstractEntity<Genre> {
  @Column()
  name: string;
}
