const {Entity, PrimaryGeneratedColumn, Column} = require ("typeorm")

@Entity()
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