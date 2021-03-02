import React from "react";
import "./style.css";

function Jumbotron(props){
    return(
    <div className="jumbotron jumbotron-fluid hero">
        <span>{props.children}</span>
    </div>
    )
}

export default Jumbotron