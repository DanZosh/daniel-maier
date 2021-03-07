import React from 'react'
import M from "materialize-css"
import "./style.css"; 


function Nav(props){
    


    
    return(
        <nav>
            <div className="nav-wrapper">
                <span className="brand-logo left">:{'}'}DanZosh</span>
                <ul id="nav-mobile" className="right ">
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
                        {/* <a 
                            href="#Resume"
                            onClick={()=> props.handleDisplayChangeProp("Resume")}
                        >Resume</a> */}
                        <a href="./assets/resume/Daniel_Maier_Resume.pdf" target="_blank" class="newBackground">Resume</a>
                    </li>
                    {/* Contact button here */}
                    <li>
                        {props.children}
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav