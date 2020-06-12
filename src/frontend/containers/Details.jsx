import React, { useEffect } from "react";
import { connect } from "react-redux";
import "../assets/styles/components/Details.scss";

const Details = (props) => {
    return (
        <div className="Details">
            <h1>Detalles</h1>
        </div>
    )
};

const mapStateToProps = state => {
    return { }
}

const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(Details);
