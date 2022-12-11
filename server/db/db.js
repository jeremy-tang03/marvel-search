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
      this.collName = null;
    }
    return instance;
  }
    
  // connect to db
  async connect(dbName, collName) {
    // this.collName = collName;
    // if instance db is not null
    if (instance.db) {
      return;
    }
    
    await instance.client.connect();
    instance.db = await instance.client.db(dbName);
    console.log("Connected to MongoDB database " + dbName);
    instance.collection = await instance.db.collection(collName)
<<<<<<< HEAD
    // index name
    instance.collection.createIndex({"name": 1});
    instance.collection.createIndex({"id": 1}, {"unique": true})
=======
>>>>>>> 4ae97a8fc6c2e1c347887670472fbffc969660b4
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
    
  // query with exact id
  async queryCharacter(queryId) {
    let intID = parseInt(queryId)
    return await instance.collection.find({id: intID}).toArray();
  }

  // query for all characters containing search, case insensitive
  async queryAllContaining(search) {
    return await instance.collection.find({name: {$regex: search, $options: "i"}}).toArray();
  }
}
