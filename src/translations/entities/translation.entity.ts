import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Translation {
  @PrimaryColumn()
  key: string;

  @Column()
  value: string;

  constructor(entity: Partial<Translation>) {
    Object.assign(this, entity);
  }
}
