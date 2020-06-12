import React, { useState, useEffect, Fragment } from "react";

//Componentes

//redux
import { connect } from 'react-redux';

//Css
import "../assets/styles/App.scss";

const List = ({ mylist, trends, originals }) => {
  return (
    <Fragment>
      <h1>Hola mundo</h1>  
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps, null)(List);