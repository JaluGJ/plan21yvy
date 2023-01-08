import dotenv from "dotenv"
dotenv.config()

const {db} = require("./src/db.ts")

const app = require("./src/app.ts")
const { PORT } = process.env

db.initialize().then(() => {
  console.log("La db fue conectada exitosamente")
  app.listen(PORT, () => {
    console.log(`Server levantado en puerto ${PORT}`)
  })
}).catch((error) => {
  console.error("Error durante la conexión", error)
})