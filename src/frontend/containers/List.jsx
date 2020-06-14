import React, { useState, useEffect, Fragment } from "react";

//Componentes
import Table from "../components/Table";
import Row from "../components/Row";
import Header from "../components/Header";
import Buttom from "../components/Buttom";

//redux
import { connect } from "react-redux";

//Css
import "../assets/styles/App.scss";

const List = ({ data, page }) => {
    function renderButtoms() {
        if (page == 1) {
            return (
                <div className="buttoms">
                    <Buttom key="Rigth" direction="rigth" side=">" />
                </div>
            );
        } else if (page == 50) {
            return (
                <div className="buttoms">
                    <Buttom key="Left" direction="left" side="<" />
                </div>
            );
        } else {
            return (
                <div className="buttoms">
                    <Buttom key="Left" direction="left" side="<" />
                    <Buttom key="Rigth" direction="rigth" side=">" />
                </div>
            );
        }
    }
    return (
        <Fragment>
            <Header />
            {data.length > 0 && (
                <Table>
                    {data.map((row) => (
                        <Row key={row.id} {...row} />
                    ))}
                </Table>
            )}
            <div className="pages">Page: {page}</div>
            <div className="buttoms-container">{renderButtoms()}</div>
        </Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        data: state.data,
        page: state.currentPage,
    };
};

export default connect(mapStateToProps, null)(List);
