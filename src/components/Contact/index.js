import React from 'react'
import M from "materialize-css"
import "./style.css"; 


function Contact(){
    return(

        <li>
        <a className='dropdown-trigger' href='#' data-target='dropdown1'>Contact Me</a>

            {/* Dropdown Structure */}
            <ul id='dropdown1' className='dropdown-content'>
            <li><a href="tel:9542956420" className="drop-menu">Phone</a></li>
            <li><a href="mailto:dannymaier@gmail.com" className="drop-menu">Email</a></li>
            <li><a href="https://www.linkedin.com/in/danieljmaier/" target="_blank" className="drop-menu">LinkedIn</a></li>
            <li><a href="https://github.com/DanZosh" target="_blank" className="drop-menu">GitHub</a></li>
            {/* <li className="divider" tabindex="-1"></li>
            <li><a href="#!">three</a></li>
            <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
            <li><a href="#!"><i className="material-icons">cloud</i>five</a></li> */}
            </ul>
        </li>
    )
}

export default Contact