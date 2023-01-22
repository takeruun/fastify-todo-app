import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1674398885131 implements MigrationInterface {
    name = 'migration1674398885131'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`name\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`name\``);
    }

}
