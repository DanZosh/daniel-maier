import React from 'react'
import Work from "../pages/Work";
import "./style.css"; 

function Nav(props){
    {console.log("NavProps: ", props.projectsProp)}
    return(
        <nav>
            <div className="nav-wrapper">
            <span className="brand-logo col s1">:{'}'}DanZosh</span>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                    <a 
                        href="#AboutMe"
                        onClick={()=> props.handleDisplayChangeProp("AboutMe")}
                    >About Me</a>
                </li>
                <li>
                    <a
                            href="#Work"
                            onClick={()=> props.handleDisplayChangeProp("Work")}
                    >
                        {/* <Work projectsProp = {props.projectsProp}> */}
                        Work
                        {/* </Work> */}
                    </a>
                </li>
                <li>
                    <a 
                        href="#ContactMe"
                        onClick={()=> props.handleDisplayChangeProp("ContactMe")}
                    >Contact Me</a>
                </li>
                <li>
                    <a 
                        href="#Resume"
                        onClick={()=> props.handleDisplayChangeProp("Resume")}
                    >Resume</a>
                </li>
            </ul>
            </div>
        </nav>
    )
}
export default Nav