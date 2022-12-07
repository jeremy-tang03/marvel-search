const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello world");
})

// TODO add endpoints for client side
// fetch from db, query string matching name, query specific character

module.exports = router;
