import { Column, Entity, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../database/abstract.entity';
import { Show } from '../../shows/entities/show.entity';

@Entity()
export class ShowType extends AbstractEntity<ShowType> {
  @Column()
  name: string;

  @OneToMany(() => Show, (show) => show.type)
  shows: Show[];
}
