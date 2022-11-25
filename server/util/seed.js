const DB = require("../db/DB.js");
const marvelApi = require("./MarvelApi.js");

(async () => {
    let data = await marvelApi.getAllCharacters();
    try{
        // const db = new DB();
        // await db.connect("marvel", "characters")
        // let num = await db.insertMany()
        console.log("test")
    }
    catch(e) {
        console.error("Could not connect to DB " + e);
    }
})();