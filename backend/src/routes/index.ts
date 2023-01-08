import { Router } from "express";
const userRoute = require("./usersRoute")

const router = Router();

router.use("/user", userRoute)

module.exports = router