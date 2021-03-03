import React from "react";
import {Document,Page} from 'react-pdf';

function Resume() {

    return (
        <div>
            <h1>Resume:</h1>
            <div>
                <object 
                data="../../assets/resume/Daniel_Maier_Resume.pdf" 
                type="application/pdf" 
                width="100%" 
                height="100%">
                </object>
                <Document
                    file="../../assets/resume/Daniel_Maier_Resume.pdf"
                >
                </Document>
            </div>
        </div>
    );
}

export default Resume;