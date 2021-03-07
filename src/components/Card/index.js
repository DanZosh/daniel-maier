import React from 'react';
import "./style.css";

function Card({key, id, image, title, summary, gitLink, actualLink}) {
    return (

 
      <div className="card-container col s12 m4">
        <div className="card">
{/* Title */}
            <span className="card-title">{title}
          <div className="divider" tabindex="-1"></div>
            </span>
          <br/>
{/* image */}
          <div className="card-image">
            <img src={image}/>
          </div>
          
{/* Summary */}
          <div className="card-content">
            <p>{summary}</p>
          </div>
{/* Links */}
          <div class="card-action">
            <a target="_blank" href={gitLink}>Repo</a>
            <a target="_blank" href={actualLink}>App</a>
        </div>

        </div>
      </div>


    )
}
export default Card