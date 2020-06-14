const MongoLib = require("../libs/mongo");

class DataService {
    constructor() {
        this.collection = "grants";
        this.mongoLib = new MongoLib();
    }

    async getGrant({ grantId }) {
        const data = await this.mongoLib.get(this.collection, grantId);
        const dataParsed = {
            OpportunityTitle: data.OpportunityTitle,
            OpportunityNumber: data.OpportunityNumber,
            OpportunityCategory: data.OpportunityCategory,
            FundingInstrumentType: data.FundingInstrumentType.toString(),
            CategoryOfFundingActivity: data.CategoryOfFundingActivity.toString(),
            CFDANumbers: data.CFDANumbers.toString(),
            EligibleApplicants: data.EligibleApplicants.toString(),
            PostDate: (data.PostDate) ? data.PostDate.substr(0, 2) + '-' + data.PostDate.substr(2, 2) + '-' + data.PostDate.substr(4, 4) : "",
            CloseDate: (data.CloseDate) ? data.CloseDate.substr(0, 2) + '-' + data.CloseDate.substr(2, 2) + '-' + data.CloseDate.substr(4, 4) : "",
            ArchiveDate: (data.ArchiveDate) ? data.ArchiveDate.substr(0, 2) + '-' + data.ArchiveDate.substr(2, 2) + '-' + data.ArchiveDate.substr(4, 4) : "",
            ExpectedNumberOfAwards: data.ExpectedNumberOfAwards,
            CostSharingOrMatchingRequirement: data.CostSharingOrMatchingRequirement,
            AwardCeiling: data.AwardCeiling,
            AwardFloor: data.AwardFloor,
            AdditionalInformationOnEligibility: data.AdditionalInformationOnEligibility,
            AgencyName: data.AgencyName,
            Description: data.Description,
            Version: data.Version,
            AdditionalInformationURL: data.AdditionalInformationURL,
            AdditionalInformationText: data.AdditionalInformationText,
            GrantorContactEmail: data.GrantorContactEmail,
            GrantorContactEmailDescription: data.GrantorContactEmailDescription,
            GrantorContactText: data.GrantorContactText
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
                PostDate: (item.PostDate) ? item.PostDate.substr(0, 2) + '-' + item.PostDate.substr(2, 2) + '-' + item.PostDate.substr(4, 4) : "",
                CloseDate: (item.CloseDate) ? item.CloseDate.substr(0, 2) + '-' + item.CloseDate.substr(2, 2) + '-' + item.CloseDate.substr(4, 4) : "",
            }
            return itemParsed;
        })
        return dataParsed || [];
    }
}

module.exports = DataService;
