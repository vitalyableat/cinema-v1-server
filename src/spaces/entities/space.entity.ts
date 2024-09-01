import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../database/abstract.entity';
import { Location } from '../../locations/entities/location.entity';
import { Lounge } from '../../lounges/entities/lounge.entity';

@Entity()
export class Space extends AbstractEntity<Space> {
  @Column()
  name: string;

  @Column()
  address: string;

  @ManyToOne(() => Location, (location) => location.spaces)
  location: Location;

  @OneToMany(() => Lounge, (lounge) => lounge.space, { cascade: true })
  lounges: Lounge[];
}
