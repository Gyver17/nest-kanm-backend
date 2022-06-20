import { MigrationInterface, QueryRunner } from 'typeorm';

export class db1655759565880 implements MigrationInterface {
  name = 'db1655759565880';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying(100) NOT NULL, "email" character varying(150) NOT NULL, "password" character varying NOT NULL, "first_name" character varying(100) NOT NULL, "last_name" character varying(100) NOT NULL, "secret_code" character varying(10), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")); COMMENT ON COLUMN "user"."secret_code" IS 'password reset code sent by email'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
