const {Entity, PrimaryGeneratedColumn, Column} = require ("typeorm")

export class Country {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  country: string

  @Column()
  short: string

  @Column()
  status: string
}