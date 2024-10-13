import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column()
  status: string; // 'ativo' ou 'inativo'

  @Column()
  tipoPessoa: string; // 'junior', 'pleno', 'senior'
}
