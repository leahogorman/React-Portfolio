import React from "react";
import Resume from "../components/Resume"

function ResumePage() {


    return (
        <div id="resume">
            <Resume />
            <style jsx>{`
                .resume {
                    margin-left: auto;
                    margin-right: auto;
                    width: 75vw;
                }
            `}</style>
        </div>
    );
}
export default ResumePage;

