import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

import { AudioTechnology } from '../../audio-technologies/entities/audio-technology.entity';
import { AbstractEntity } from '../../database/abstract.entity';
import { Language } from '../../languages/entities/language.entity';
import { Lounge } from '../../lounges/entities/lounge.entity';
import { Show } from '../../shows/entities/show.entity';
import { Ticket } from '../../tickets/entities/ticket.entity';
import { VideoTechnology } from '../../video-technologies/entities/video-technology.entity';

@Entity()
export class Session extends AbstractEntity<Session> {
  @Column({ type: 'timestamptz' })
  start: Date;

  @Column({ type: 'timestamptz' })
  end: Date;

  @Column()
  available: boolean;

  @ManyToOne(() => VideoTechnology, (videoTechnology) => videoTechnology.sessions)
  videoTechnology: VideoTechnology;

  @ManyToOne(() => AudioTechnology, (audioTechnology) => audioTechnology.sessions)
  audioTechnology: AudioTechnology;

  @ManyToOne(() => Language, (language) => language.sessions)
  language: Language;

  @ManyToOne(() => Show, (show) => show.sessions)
  show: Show;

  @ManyToOne(() => Lounge, (lounge) => lounge.sessions)
  lounge: Lounge;

  @OneToMany(() => Ticket, (ticket) => ticket.session)
  tickets: Ticket[];
}
