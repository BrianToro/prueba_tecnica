const { MongoClient, ObjectId } = require('mongodb');
const { config } = require('../config/index.js');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;


const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`;

class MongoLib {
    constructor() {
        this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        this.dbName = DB_NAME;
    }
    connect() {
        if (!MongoLib.connection) {
            MongoLib.connection = new Promise((resolve, reject) => {
                this.client.connect(err => {
                    if (err)
                        reject(err);

                    console.log('Connected succesfully to mongo db')
                    resolve(this.client.db(this.dbName));
                })
            })
        }
        return MongoLib.connection;
    }

    getAll(collection, pass, limit) {
        const numOfPages = (parseInt(pass) * limit) - limit;
        let limitOfReg = parseInt(limit);
        return this.connect().then((db) => {
            return db.collection(collection).find()
                .project({ OpportunityTitle: 1, OpportunityNumber: 1,  AgencyCode: 1, PostDate: 1, CloseDate: 1 })
                .skip(numOfPages)
                .limit(limitOfReg)
                .toArray();
        });
    }

    get(collection, id) {
        return this.connect().then((db) => {
            return db
                .collection(collection)
                .findOne({ _id: ObjectId(id) })
        });
    }
}

module.exports = MongoLib;