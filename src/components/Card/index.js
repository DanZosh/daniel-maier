import React from 'react';
import "./style.css";

function Card({key, id, image, title, summary, gitLink, actualLink}) {
    return (

 
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <img src={image}/>
          </div>
          <div className="divider" tabindex="-1"></div>
            <span className="card-title">{title}</span>
          <div className="card-content">
            <p>{summary}</p>
          </div>
          <div class="card-action">
            <a target="_blank" href={gitLink}>Repo</a>
            <a target="_blank" href={actualLink}>App</a>
        </div>
        </div>
      </div>


    )
}
export default Card