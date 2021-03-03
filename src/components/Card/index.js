import React from 'react';
import "./style.css";

function Card({key, id, image, title, summary, gitLink, actualLink}) {
    return (

 
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <img src={image}/>
          </div>
            <span className="card-title">{title}</span>
          <div className="card-content">
            <p>{summary}</p>
          </div>
          <div class="card-action">
            <a href={gitLink}>App</a>
            <a href={actualLink}>Repo</a>
        </div>
        </div>
      </div>


    )
}
export default Card