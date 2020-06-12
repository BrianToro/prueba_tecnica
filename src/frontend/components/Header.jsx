import React from "react";
import { connect } from "react-redux";
import "../assets/styles/components/Header.scss";

const Header = (props) => {
    return (
        <header>
            <h1>header</h1>
        </header>
    );
};

const mapStateToProps = (state) => {
    return { };
};

const mapDispatchtoProps = { };

export default connect(mapStateToProps, mapDispatchtoProps)(Header);
