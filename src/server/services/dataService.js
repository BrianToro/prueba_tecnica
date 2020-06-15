const MongoLib = require("../libs/mongo");

class DataService {
    constructor() {
        this.collection = "grants2";
        this.mongoLib = new MongoLib();
    }

    async getGrant({ grantId }) {
        const data = await this.mongoLib.get(this.collection, grantId);
        const dataParsed = {
            OpportunityTitle: data.OpportunityTitle,
            OpportunityNumber: data.OpportunityNumber,
            PostDate: data.PostDate,
            CloseDate: data.CloseDate,
            ExpectedNumberOfAwards: data.ExpectedNumberOfAwards,
            AgencyName: data.AgencyName,
            Version: data.Version,
            GrantorContactText: data.GrantorContactText,
            AgencyContactPhone: data.AgencyContactPhone,
            AgencyContactEmail: data.AgencyContactEmail,
            LastUpdate: data.LastUpdate,
            EstimatedTotalProgramFunding: data.EstimatedTotalProgramFunding,
        }
        return dataParsed || {};
    }

    async getPageOfGrants({ pass }) {
        const limit = 20;
        const data = await this.mongoLib.getAll(this.collection, pass, limit);
        const dataParsed = data.map(item => {
            const itemParsed = {
                _id: item._id,
                OpportunityTitle: item.OpportunityTitle,
                OpportunityNumber: item.OpportunityNumber,
                AgencyCode: item.AgencyCode,
                PostDate: item.PostDate,
                CloseDate: item.CloseDate,
            }
            return itemParsed;
        })
        return dataParsed || [];
    }
}

module.exports = DataService;
