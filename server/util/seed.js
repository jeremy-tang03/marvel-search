const DB = require("../db/DB.js");
const marvelApi = require("./MarvelApi.js");

(async () => {
    let data = await marvelApi();
    console.log(data)
    try{
        const db = new DB();
        await db.connect("marvel", "characters")
        let num = await db.insertMany(data)
    }
    catch(e) {
        console.error("Connection error while seeding," + e);
    }
})();