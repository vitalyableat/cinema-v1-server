import { Column, Entity, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../database/abstract.entity';
import { Space } from '../../spaces/entities/space.entity';

@Entity()
export class Location extends AbstractEntity<Location> {
  @Column()
  country: string;

  @Column()
  city: string;

  @OneToMany(() => Space, (space) => space.location, { cascade: true })
  spaces: Space[];
}
