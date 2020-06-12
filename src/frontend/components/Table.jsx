import React from "react";
import "../assets/styles/components/Table.scss";

const Table = ({ children }) => (
    <div className="table-container">
        <table className="table">
            <thead>
                <tr>
                    <th>Opportunity Number</th>
                    <th>Opportunity Title</th>
                    <th>Agency</th>
                    <th>Posted Date</th>
                    <th>Close Date</th>
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </table>
    </div>
);

export default Table;
