import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("cars")
export class Car {
  @PrimaryColumn()
  id?: string;

  @Column()
  plate: string;

  @Column()
  chassis: number;

  @Column()
  renavam: number;

  @Column()
  model: string;

  @Column()
  brand: string;

  @Column()
  year: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) this.id = uuidV4();
  }
}
