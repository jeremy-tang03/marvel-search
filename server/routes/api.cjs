const express = require("express");
const router = express.Router();
const DB = require("../db/db.js");

const db = new DB();
await db.connect("marvel", "characters");

router.get("/", (req, res) => {
  res.send("Use \"/get/{id}\" or \"/search/{query}\"");
})
router.get("/get/:id", (req, res) => {
  if('id' in req.params) {
    res.json({'id' : req.params['id']});
  } else {
    res.status(400).json({error: 'not supported'});
  }
});
router.get("/search/:query", async (req, res) => {
  if('query' in req.params) {
    console.log(await db.queryAllContaining(req.params.query));
    res.json({'query': req.params['query']});
  } else {
    res.status(400).json({error: 'not supported'});
  }
})

module.exports = router;
