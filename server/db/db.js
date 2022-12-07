require("dotenv").config();

const dbURL = process.env.ATLAS_URI
// console.log(dbURL)
const MongoCLient = require("mongodb").MongoClient
let instance;

module.exports = class db {
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
    
    // query with exact name
    async queryCharacter(queryId) {
        return await instance.collection(collName).findOne({id : queryId});
    }

    // query for all characters containing search, case insensitive
    async queryAllContaining(search) {
        return await instance.collection(collName).find({name: {$regex: search, $options: "i"}});
    }
}
