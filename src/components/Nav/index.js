import React from 'react'
import "./style.css"; 

function Nav(){
    return(
        <nav>
            <div className="nav-wrapper">
            <span className="brand-logo col s1">:{'}'}DanZosh</span>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="sass.html">About Me</a></li>
                <li><a href="badges.html">Work</a></li>
                <li><a href="collapsible.html">Contact Me</a></li>
                <li><a href="collapsible.html">Resume</a></li>
            </ul>
            </div>
        </nav>
    )
}
export default Nav