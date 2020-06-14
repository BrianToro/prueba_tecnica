import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Row.scss';

const Row = ({ _id, OpportunityNumber, OpportunityTitle, AgencyCode, PostDate, CloseDate }) => (
    <tr>
        <td key={_id + "-1"}><Link to={`/grant/${_id}`}>{OpportunityNumber}</Link></td>
        <td key={_id + "-2"}>{OpportunityTitle}</td>
        <td key={_id + "-3"}>{AgencyCode}</td>
        <td key={_id + "-4"}>{PostDate}</td>
        <td key={_id + "-5"}>{(CloseDate)? CloseDate : "N/A"}</td>
    </tr>
);

export default Row;