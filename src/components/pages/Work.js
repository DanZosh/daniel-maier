import React from "react";
import Wrapper from "../Wrapper";
import Card from "../Card";

function Work(props){
    {console.log("workProps:", props)}

    <Wrapper>
    {props.projectProp.map(project =>{
    return(
        <Card
        key = {props.projectProp.id}
        id = {props.projectProp.id}
        image = {props.projectProp.image}
        title = {props.projectProp.title}
        summary = {props.projectProp.summary}
        gitLink = {props.projectProp.gitLink}
        actualLink = {props.projectProp.actualLink}
        // {...project} //image title summary gitLink actualLink
        />
    )
    })}
    </Wrapper>

}
export default Work;