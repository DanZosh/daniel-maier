import React from 'react'
import M from "materialize-css"
// import "./style.css"; 


function Contact(){
    return(

        <li>
        <a className='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>

            {/* Dropdown Structure */}
            <ul id='dropdown1' className='dropdown-content'>
            <li><a href="#!">one</a></li>
            <li><a href="#!">two</a></li>
            <li className="divider" tabindex="-1"></li>
            <li><a href="#!">three</a></li>
            <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
            <li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
            </ul>
        </li>
    )
}

export default Contact