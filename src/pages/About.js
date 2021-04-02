import React from "react";

import Paragraph from '../components/Paragraph'

function AboutPage(props) {

    return(
        <div>
            <Paragraph title={props.title} subTitle={props.subTitle}>
                <p>
                    I'm a Web Developer with a background in Art and Design. (You can see my art website <a className='disabled' href="#" >here</a>)
                </p>
                <p>
                    I have a BFA in Sculpture from Tyler School of Art and a Certificate in Full Stack Development from University of Toronto.
                </p>
                <p>
                    To learn more please check out my resume below.
                </p>
            </Paragraph>
            <style jsx>{`
                .disabled {
                    color: #737373;
                    pointer-event: none;
                    opacity: 0.5;
                }
                .disabled:hover {
                    text-decoration: none;
                    color: #737373;
                    pointer-event: none;
                    transform:scale(1); 
                }
            `}</style>
        </div>
    );

}
export default AboutPage;