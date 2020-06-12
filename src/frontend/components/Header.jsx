import React from "react";
import { connect } from "react-redux";
import "../assets/styles/components/Header.scss";

const Header = (props) => {
    return (
        <header>
            <nav className="navbar">
                <span className="navbar-title">Prueba tecnica</span>
            </nav>
        </header>
    );
};

const mapStateToProps = (state) => {
    return { };
};

const mapDispatchtoProps = { };

export default connect(mapStateToProps, mapDispatchtoProps)(Header);
