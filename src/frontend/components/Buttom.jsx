import React from "react";
import { connect } from "react-redux";
import { nextPage, backPage } from '../actions'
import "../assets/styles/components/Buttom.scss";

const Buttom = (props) => {

    function handleClick(direction, page){
        if(direction === 'rigth'){
            props.nextPage(page);
        } else {
            props.backPage(page);
        }
    }

    return <button onClick={() => handleClick(props.direction, props.page)} className="buttom">{props.side}</button>;
};

const mapDispatchToProps = {
    nextPage,
    backPage
}

const mapStateToProps = state => {
    return {
        page: state.currentPage
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttom);
