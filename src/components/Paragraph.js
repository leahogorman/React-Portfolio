import React from 'react';
import placeholder from '../assets/images/placeholder2.jpg'

import { Button } from 'react-bootstrap';

function Paragraph(props) {

    return(
        <div className="aboutContainer">
            <div className="imageContainer">
                <img className="aboutImage" src={placeholder} alt={placeholder} />
            </div>
            <div className="infoContainer">
                <div className="textContainer">
                    <div className="titleContainer">
                        <h2 className="title justify-content-right font-weight-bold">{props.title}</h2>
                        <span className="subTitle justify-content-right font-weight-normal">(it's pronounced like they do in <span className="starWars">Star Wars</span>)</span>
                    </div>
                    <div className="paragraphContainer">
                        {props.children}
                    </div>
                    <div className="resumeContainer">
                        <Button className="resumeBtn" type="button" onClick={event =>  window.location.href='/resume'}>RESUME</Button>
                    </div>
                    
                </div>
            </div>
            <style jsx>{`
                .aboutContainer {
                    height: fit-content;
                    width: 90vw;
                    justify-content: center;
                    display: grid;
                    grid-template-column: 1fr, 1fr;
                    margin: 5vh 5vw 12vh 5vw;
                    margin-left: 5vw;
                    background-color: rgba(0, 0, 0, .5);
                    box-shadow: 1px 1px 20px 20px  rgba(120, 120, 120, .5);
                    border-radius: 50px;
                }
                .aboutImage {
                    border-radius: 50%;
                    margin-top:3rem;
                }
                .imageContainer {
                    padding: 3rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    padding-top: 1rem;
                    width: 30vw;
                    grid-column: 1;
                }
                .infoContainer {
                    width: 60vw;
                    border-radius: 0 50px 50px 0;
                    grid-column: 2;
                    padding: 4rem;
                }
                .textContainer {
                    font-weight: bold;
                    background-color: white;
                    height: fit-content;
                    border-radius: 50px;
                    padding: 3rem;
                }
                .title {
                    font-size: 4rem;
                }
                .subTitle {
                    font-size: 1.25rem;
                }
                .starWars {
                    
                }
                .paragraphContainer {
                    width: 95%;
                    padding-top: 3rem;
                    padding-left: 1rem;
                    font-size: 1.5rem;
                }
                .resumeContainer {
                    display: flex;
                    justify-content: flex-end;
                    margin-right: 2rem;
                }
                .resumeBtn {
                    text-align: center;
                    width: 200px;
                    background-color: #757575;
                    padding: 1rem;
                    text-decoration: none;
                    font-weight: bold;
                    color: white;
                    border-radius: 10px;
                    margin-top: 1rem;
                    border: #757575;
                    outline: #757575;
                }
                .resumeBtn:hover {
                    text-decoration: none;
                    color: white;
                    background-color: black;
                    transform: scale(1.15);
                    border: black;
                    outline: black;
                }
                @media only screen and (max-width: 1200px) {
                    .aboutContainer {
                        height: fit-content;
                        display: grid;
                        grid-template-column: 1fr;
                        grid-template-row: 1fr, 1fr;
                        background-color: transparent;
                    }
                    .aboutImage {
                        width: 30vw;
                    }
                    .imageContainer {
                        background-color: transparent;
                        padding: 3rem;
                        width: 80vw;
                        flex-direction: row;
                        justify-content: center;
                        border-radius: 50px 0 0 50px;
                        padding-top: 1rem;
                        grid-row: 1;
                    }
                    .infoContainer {
                        height: fit-content;
                        width: 100%;
                        border-radius: 50px 50px 50px 50px;
                        grid-column: 1;
                        grid-row: 2;
                        padding: 0;
                        padding-bottom: 3rem;
                    }
                    .textContainer {
                        background-color: black;
                        color: white;
                    }
                  }
            `}</style>
        </div>

    )

}
export default Paragraph;