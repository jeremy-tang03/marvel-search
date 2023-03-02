const DB = require("../db/DB.js");
const marvelApi = require("./MarvelApi.js");

(async () => {
    // fetch data
    let data = await marvelApi();
    console.log(data)
    try{
        // connect to db
        const db = new DB();
        await db.connect("marvel", "characters");
        // insert data from api to DB
        let num = await db.insertMany(data);
    }
    catch(e) {
        console.error("Connection error while seeding," + e);
    }
})();
