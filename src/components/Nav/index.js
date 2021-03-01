import React from 'react'

function Nav(){
    return(
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">:{'}'}DanZosh</a>
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