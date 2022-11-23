const DB = require("../db/DB.js");

(async () => {
    try{
        const db = new DB();
        await db.connect()
    }
    catch(e) {
        console.error("Could not connect");

    }
})();