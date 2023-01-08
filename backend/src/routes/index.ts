const { Router } = require("express");

const router = Router();

router.get('/', (_req, res) => {
    res.send('Hola mundito cruel');
})


module.exports = router
