import { Router } from "express";
const { getAllUsers } = require("../controllers/user/user.get.controller.ts")

const router = Router();

router.get("/", getAllUsers)

module.exports = router