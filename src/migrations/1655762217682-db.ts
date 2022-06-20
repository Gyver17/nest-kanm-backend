import { MigrationInterface, QueryRunner } from 'typeorm';

export class db1655762217682 implements MigrationInterface {
  name = 'db1655762217682';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "session" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" character varying NOT NULL, "secretKey" uuid NOT NULL DEFAULT uuid_generate_v4(), CONSTRAINT "PK_f55da76ac1c3ac420f444d2ff11" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "session"`);
  }
}
