import { Column, Entity, ManyToOne } from 'typeorm';

import { AbstractEntity } from '../../database/abstract.entity';
import { Show } from '../../shows/entities/show.entity';

@Entity()
export class ShowPhoto extends AbstractEntity<ShowPhoto> {
  @Column()
  url: string;

  @ManyToOne(() => Show, (show) => show.photos)
  show: Show;
}
