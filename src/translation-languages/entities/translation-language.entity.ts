import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../database/abstract.entity';

@Entity()
export class TranslationLanguage extends AbstractEntity<TranslationLanguage> {
  @Column()
  name: string;

  @Column()
  locale: string;
}
