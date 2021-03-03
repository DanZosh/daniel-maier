import React from "react";
import Wrapper from "../Wrapper";
import Card from "../Card";

function Work(props){
    
    {console.log("workProps:", props.projectsProp)}
return(

    <Wrapper>
    {props.projectsProp.map(project =>{
    return(
        <Card
        // key = {props.projectsProp.id}
        // id = {props.projectsProp.id}
        // image = {props.projectsProp.image}
        // title = {props.projectsProp.title}
        // summary = {props.projectsProp.summary}
        // gitLink = {props.projectsProp.gitLink}
        // actualLink = {props.projectsProp.actualLink}
        key = {project.id}
        id = {project.id}
        image = {project.image}
        title = {project.title}
        summary = {project.summary}
        gitLink = {project.gitLink}
        actualLink = {project.actualLink}
        />
    )
    })}
    </Wrapper>
)

}
export default Work;