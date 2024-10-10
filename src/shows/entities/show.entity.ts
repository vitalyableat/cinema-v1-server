import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm';

import { AudioTechnology } from '../../audio-technologies/entities/audio-technology.entity';
import { AbstractEntity } from '../../database/abstract.entity';
import { Genre } from '../../genres/entities/genre.entity';
import { Language } from '../../languages/entities/language.entity';
import { Session } from '../../sessions/entities/session.entity';
import { ShowPhoto } from '../../show-photos/entities/show-photo.entity';
import { ShowType } from '../../show-types/entities/show-type.entity';
import { VideoTechnology } from '../../video-technologies/entities/video-technology.entity';

@Entity()
export class Show extends AbstractEntity<Show> {
  @Column()
  duration: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  preview: string;

  @Column({ type: 'timestamptz' })
  rentalStart: Date;

  @Column({ type: 'timestamptz' })
  rentalEnd: Date;

  @Column()
  age: number;

  @Column()
  trailer: string;

  @Column()
  available: boolean;

  @ManyToOne(() => ShowType, (showType) => showType.shows)
  type: ShowType;

  @ManyToMany(() => Language)
  @JoinTable()
  languages: Language[];

  @ManyToMany(() => Genre)
  @JoinTable()
  genres: Genre[];

  @ManyToMany(() => AudioTechnology)
  @JoinTable()
  audioTechnologies: AudioTechnology[];

  @ManyToMany(() => VideoTechnology)
  @JoinTable()
  videoTechnologies: VideoTechnology[];

  @OneToMany(() => Session, (session) => session.show)
  sessions: Session[];

  @OneToMany(() => ShowPhoto, (showPhoto) => showPhoto.show, { cascade: true })
  photos: ShowPhoto[];
}
