import { Logger } from '@nestjs/common';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class PublicItems1724690910888 implements MigrationInterface {
  private readonly logger = new Logger(PublicItems1724690910888.name);

  public async up(queryRunner: QueryRunner): Promise<void> {
    this.logger.log('Up');
    await queryRunner.query('UPDATE item SET public = TRUE');
  }

  public async down(): Promise<void> {
    this.logger.log('Down');
  }
}
