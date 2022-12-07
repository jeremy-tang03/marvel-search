const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Use \"/get/{id}\" or \"/search/{query}\"");
})
router.get("/get/:id", (req, res) => {
    if('id' in req.params) {
        res.json({'id' : req.params['id']})
    } else {
        res.status(400).json({error: 'not supported'});
    }
});
router.get("/search/:query", (req, res) => {
    if('query' in req.params) {
        res.json({'query': req.params['query']});
    } else {
        res.status(400).json({error: 'not supported'});
    }
})

module.exports = router;
