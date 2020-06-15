import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
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
                <button className="back" onClick={() => props.history.goBack()}>
                    back
                </button>
                <h1>{data.OpportunityTitle}</h1>
                <section>
                    <h3>Information</h3>
                    <ul>
                        <li>
                            <strong>Agency Name:</strong> {data.AgencyName}
                        </li>
                        <li>
                            <strong>Posted Date:</strong> {data.PostDate}
                        </li>
                        <li>
                            <strong>
                                Current Closing Date for Applications:
                            </strong>{" "}
                            {data.CloseDate ? data.CloseDate : "N/A"}
                        </li>
                        <li>
                            <strong>Last update: </strong> {data.LastUpdate}
                        </li>
                        <li>
                            <strong>Estimated total program funding</strong>{" "}
                            {data.EstimatedTotalProgramFunding}
                        </li>
                        <li>
                            <strong>Expected Number of Awards:</strong>{" "}
                            {data.ExpectedNumberOfAwards}
                        </li>
                        <li>
                            <strong>Version: </strong> {data.Version}
                        </li>
                        <li>
                            <strong>Additional information of Agency:</strong>{" "}
                            {data.AgencyContactPhone}
                            {data.AgencyContactEmail}
                        </li>
                        <li>
                            <strong>Grantor Contact Information:</strong>{" "}
                            {data.GrantorContactText}
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default connect(null, null)(Details);
