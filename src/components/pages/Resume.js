import React from "react";

function Resume() {

    return (
        <div>
            <h1 style={{marginLeft:"80px", color:"#37587a" }}>Resume:</h1>
            <div style={{width:"100%"}}>
                <object 
                data="assets/resume/Daniel_Maier_Resume.pdf" 
                type="application/pdf"
                style={{width:"100%"}}
                >
                </object>
            </div>
        </div>
    );
}

export default Resume;