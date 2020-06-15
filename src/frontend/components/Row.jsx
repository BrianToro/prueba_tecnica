import React from "react";
import { Redirect, Link } from "react-router-dom";
import "../assets/styles/components/Row.scss";

const Row = (props) => {
    return (
        <tr onClick={() => props.history.push(`/grant/${props._id}`) }>
            <td key={props._id + "-2"}>{props.OpportunityTitle}</td>
            <td key={props._id + "-3"}>{props.AgencyCode}</td>
            <td key={props._id + "-4"}>{props.PostDate}</td>
            <td key={props._id + "-5"}>{props.CloseDate ? props.CloseDate : "N/A"}</td>
        </tr>
    );
};

export default Row;
