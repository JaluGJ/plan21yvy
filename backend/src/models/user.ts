import { JoinColumn, OneToOne } from "typeorm"
import { Country } from "./country"

const {Entity, PrimaryGeneratedColumn, Column} = require ("typeorm")

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  name: string

  @Column()
  lastname: string

  @Column()
  phone: string

  @OneToOne(() => Country)
  @JoinColumn()
  coutry: Country

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  status: string

  @Column()
  role: string
}