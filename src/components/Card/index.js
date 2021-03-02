import React from 'react';
import "./style.css";

function Card() {
    return (

        <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src="../../assets/images/6_weatherDash.png"/>
              <span className="card-title">Card Title</span>
            </div>
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>

    )
}
export default Card