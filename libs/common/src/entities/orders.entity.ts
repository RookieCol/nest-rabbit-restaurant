import { Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";


export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  quantity: number;
  @CreateDateColumn()
  createdAt: Date;
}