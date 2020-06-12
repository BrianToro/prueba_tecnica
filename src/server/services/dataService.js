const MongoLib = require("../libs/mongo");

class DataService {
    constructor() {
        this.collection = "grants";
        this.mongoLib = new MongoLib();
    }

    async getGrant({ grantId }) {
        const data = this.mongoLib.get(this.collection, grantId);
        return data || {};
    }

    async getPageOfGrants({ pass }) {
        const limit = 20;
        const data = this.mongoLib.getAll(this.collection, pass, limit);
        return data || [];
    }
}

module.exports = DataService;
