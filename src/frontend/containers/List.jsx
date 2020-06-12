import React, { useState, useEffect, Fragment } from "react";

//Componentes
import Table from '../components/Table';
import Row from '../components/Row';
import Column from '../components/Column';

//redux
import { connect } from 'react-redux';

//Css
import "../assets/styles/App.scss";

const List = ({ }) => {
  return (
    <Fragment>
        <Table>
          <Row>
            <Column/>
            <Column/>
            <Column/>
            <Column/>
            <Column/>
          </Row>
        </Table>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps, null)(List);