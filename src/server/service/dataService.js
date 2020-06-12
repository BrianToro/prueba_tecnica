const MongoLib = require('../libs/mongo');

class DataService {
    constructor(){
        this.collection = 'grants'
        this.mongoLib = new MongoLib();
    }

    getGrant({ grantId }){
        return new Promise((resolve, reject) => {
            const data = this.mongoLib.get(this.collection, grantId);
            resolve(data || {});
        })
    }

    getPageOfGrants({ pass }){
        return new Promise((resolve, reject) => {
            const limit = 20;
            const data = this.mongoLib.getAll(this.collection, pass, limit);
            resolve(data || []);
        })

    }
}

module.exports = DataService;