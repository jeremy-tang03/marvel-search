const express = require("express");
const router = express.Router();
//const DB = require("../db/db.js");

//const db = new DB();

//(async () => await db.connect("marvel", "characters"))();

router.get("/", (req, res) => {
  res.send("Use \"/get/{id}\" or \"/search/{query}\"");
})

// route for specific character query
// returns json array of 1 element
// /api/get/id_here

router.get("/get/:id", async (req, res) => {
  if('id' in req.params) {
    // fetch character from db
    let data = {data: "data var id"};
	//let data = await db.queryCharacter(req.params.id);
    console.log(req.params.id)
    console.log(data);
    res.json(data);
  } else {
    res.status(400).json({error: 'not supported'});
  }
});


// route for general search keyword query
// returns json array
// /api/search/query_here

router.get("/search/:query", async (req, res) => {
  if('query' in req.params) {
    // fetch list of characters from db
    let data = {data: "data var query"};
	  //let data = await db.queryAllContaining(req.params.query);
    console.log(req.params.query);
	  console.log(data);
    res.json(data);
  } else {
    res.status(400).json({error: 'not supported'});
  }
});

module.exports = router;
