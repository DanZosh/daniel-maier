import React from "react";

function ContactMe() {
    return (
    <div>

    <h1 style={{marginLeft:"80px", color:"#37587a" }}>Contact Me:</h1>
    {/* <body> */}
        <div className="container">
            <div className="row">
                <a 
                    href="tel:9542956420" 
                    className="col s2"
                > 954.295.6420</a>
                <a 
                    href="mailto:dannymaier@gmail.com" 
                    target="_blank" 
                    className="col s3"
                >dannymaier@gmail.com</a>
                <a 
                    href="https://github.com/DanZosh" 
                    target="_blank" 
                    className="col s2"
                >GitHub</a>
                <a 
                    href="https://www.linkedin.com/in/danieljmaier/" 
                    target="_blank" 
                    className="col s2"
                >LinkedIn</a>
                {/* <a 
                    href="https://open.spotify.com/?_ga=2.73156567.530972603.1587000774-658185778.1587000774" 
                    target="_blank" 
                    className="col s2"
                >Spotify</a> */}
            </div>
        </div>
    {/* </body> */}

    {/* <ul className="sideborder">
        <a href="tel:9542956420" className="newBackground2"> 954.295.6420</a>
        <a href="mailto:dannymaier@gmail.com" target="_blank" className="newBackground2">dannymaier@gmail.com</a>
        <a href="https://github.com/DanZosh" target="_blank" className="newBackground2">GitHub</a>
        <a href="https://www.linkedin.com/in/danieljmaier/" target="_blank" className="newBackground2">LinkedIn</a>
        <a href="https://open.spotify.com/?_ga=2.73156567.530972603.1587000774-658185778.1587000774" target="_blank" className="newBackground2">Spotify</a>
    </ul> */}

    </div>
  );
}

export default ContactMe;