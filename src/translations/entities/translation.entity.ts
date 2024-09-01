import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Translation {
  @PrimaryColumn()
  key: string;

  @Column()
  value: string;
}
