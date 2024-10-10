import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAdminUser1728565191560 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO "user" (name, surname, phone, email, password)
      VALUES ('Admin', 'User', '+123456789', 'admin@gmail.com', '1111');
    `);

    await queryRunner.query(`
      UPDATE "user"
      SET role = '1'::user_role_enum
      WHERE email = 'admin@gmail.com'
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM "user" WHERE email = 'admin@gmail.com';
    `);
  }
}
