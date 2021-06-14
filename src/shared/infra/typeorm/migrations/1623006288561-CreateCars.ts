import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCars1616781106805 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "cars",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "plate",
            type: "varchar",
          },
          {
            name: "chassis",
            type: "int",
          },
          {
            name: "renavam",
            type: "int",
          },
          {
            name: "model",
            type: "varchar",
          },
          {
            name: "brand",
            type: "varchar",
          },
          {
            name: "year",
            type: "int",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("cars");
  }
}
