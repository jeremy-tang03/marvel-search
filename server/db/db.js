require("dotenv").config();

const dbURL = process.env.ATLAS_URI
const { MongoCLient } = require("mongodb");
let instance;

class db {
    constructor() {
        if (!instance) {
            instance = this
            this.client = new MongoCLient(dbURL);
            this.db = null;
            this.collection = null;
        }
        return instance;
    }
    
    // connect to db
    async connect(dbName, collName) {
        // if instance db is not null
        if (instance.db) {
            return;
        }
    
        await instance.client.connect();
        instance.db = await instance.client.db(dbName);
        console.log("Connected to MongoDB database " + dbName);
        instance.collection = await instance.db.collection(collName)
    }
    
    // close db
    async close() {
        await instance.client.close();
        instance = null;
    }

    // params array of objects
    async insertMany(ObjArr) {
       return instance.collection.insertMany(ObjArr);
    }
    
    // TODO return character names
    
    // TODO return character data
}
