import React from "react";

function Resume() {
    return (
        <div>
            <h1>Resume:</h1>
        {/* <a href="./assets/resume/Daniel Maier Resume.pdf" target="_blank" class="newBackground">Resume</a> */}
            <embed 
            // href="../../assets/resume/Daniel_Maier_Resume.pdf" 
            // style={{width:"800px", height:"2100px"}}
            src='https://drive.google.com/file/d/1x1-DkLpOiQQvHiJT-xQqJOC6bSC7A-Zl/view?usp=sharing'
            />

        {/* <iframe/> */}
        </div>
    );
}

export default Resume;