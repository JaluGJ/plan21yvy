import { Country } from "./models/Country"
import { User } from "./models/User"
require("dotenv").config()
const { DataSource } = require("typeorm")
const { PG_DATABASE, PG_USER, PG_PORT, PG_DIALECT, PG_PASSWORD, PG_HOST } = process.env


const db = new DataSource({
  type: PG_DIALECT,
  host: PG_HOST,
  port: PG_PORT,
  username:PG_USER,
  password:PG_PASSWORD,
  database:PG_DATABASE,
  dropSchema: false,
  entities: [User, Country],
  synchronize: true,
  logging: true
})

module.exports = {
  db
}