import { Router } from "express";
const userRoute = require("./usersRoute")

const router = Router();

router.get('/', (_req, res) => {
    res.send('Hola mundito cruel');
})


module.exports = router

