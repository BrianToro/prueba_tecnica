import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../assets/styles/components/Details.scss";

const Details = (props) => {
    const { id } = props.match.params;

    const URL = `/api/data/${id}`;

    const [data, setData] = useState([]);

    useEffect(() => {
        loadData(URL);
    }, []);

    const loadData = (URL) => {
        axios({
            url: URL,
            method: "get",
        }).then((response) => setData(response.data.data));
    };
    return (
        <div className="Details">
            <Header />
            <div className="details-container">
                <button className="back" onClick={() => props.history.goBack()}>back</button>
                <h1>{data.OpportunityTitle}</h1>
                <span>Number: {data.OpportunityNumber}</span>
                <section>
                    <h3>General Information</h3>
                    <ul>
                        <li>
                            <strong>Opportunity Category:</strong>{" "}
                            {data.OpportunityCategory}
                        </li>
                        <li>
                            <strong>Funding Instrument Type:</strong>{" "}
                            {data.FundingInstrumentType}
                        </li>
                        <li>
                            <strong>Category of Funding Activity:</strong>{" "}
                            {data.CategoryOfFundingActivity}
                        </li>
                        <li>
                            <strong>CFDA Number(s):</strong> {data.CFDANumbers}{" "}
                        </li>
                        <li>
                            <strong>Posted Date:</strong> {data.PostDate}
                        </li>
                        <li>
                            <strong>
                                Current Closing Date for Applications:
                            </strong>{" "}
                            {data.CloseDate}
                        </li>
                        <li>
                            <strong>Archive Date:</strong> {data.ArchiveDate}
                        </li>
                        <li>
                            <strong>Expected Number of Awards:</strong>{" "}
                            {data.ExpectedNumberOfAwards}
                        </li>
                        <li>
                            <strong>
                                Cost Sharing or Matching Requirement:
                            </strong>{" "}
                            {data.CostSharingOrMatchingRequirement}
                        </li>
                        <li>
                            <strong>Award Ceiling:</strong> {data.AwardCeiling}
                        </li>
                        <li>
                            <strong>Award Floor:</strong> {data.AwardFloor}
                        </li>
                    </ul>
                    <h3>Eligibility</h3>
                    <ul>
                        <li>
                            <strong>Eligible Applicants:</strong>{" "}
                            {data.EligibleApplicants}
                        </li>
                        <li>
                            <strong>
                                Additional Information on Eligibility:
                            </strong>{" "}
                            {data.AdditionalInformationOnEligibility}
                        </li>
                    </ul>
                    <h3>Additional Information</h3>
                    <ul>
                        <li>
                            <strong>Agency Name:</strong> {data.AgencyName}
                        </li>
                        <li>
                            <strong>Description:</strong> {data.Description}
                        </li>
                        <li>
                            <strong>Link to Additional Information:</strong>{" "}
                            <a href={data.AdditionalInformationURL}>
                                {data.AdditionalInformationText}
                            </a>
                        </li>
                        <li>
                            <strong>Grantor Contact Information:</strong> {data.GrantorContactEmailDescription} : {data.GrantorContactText}
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default connect(null, null)(Details);
