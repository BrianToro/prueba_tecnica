import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../assets/styles/components/Upload.scss";

const Upload = () => {
    const fileToUpload = document.getElementById("file");
    const button = document.getElementById("button");
    let content;
    return (
        <Fragment>
            <Header />
            <div className="upload-container">
                <h1>Upload new data</h1>
                <input type="file" id="file" />
                <button id="button">submit</button>
            </div>
        </Fragment>
    );
};

export default connect(null, null)(Upload);
