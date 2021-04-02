import React from 'react';

import { FaArrowCircleRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Container, Row } from 'react-bootstrap';

function HomeLinks() {
    return(
        <div>
            <Container fluid={true} className="homeLinksContainer">
                <Row className="justify-content-around">
                        <a className="buttons" type="button" href="https://github.com/leahogorman" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={50}/>
                            <p className="hidden">View GitHub</p>
                        </a>
                        <a className="buttons" type="button" href="https://www.linkedin.com/in/leah-ogorman/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={50}/>
                            <p className="hidden">View LinkedIn</p>
                        </a>
                        <div className="buttons disabled" href="#" target="_blank" rel="noopener noreferrer">
                            <FaArrowCircleRight size={50}/>
                            <p className="hidden">View Art Website</p>
                            <p className="hidden small">Coming Soon</p>
                        </div>
                        
                    
                </Row>
            </Container>
            <style jsx>{`
            .homeLinksContainer {
                margin-top: 5rem;
                max-width: 1500px;
            }
            a {
                text-decoration: none;
            }
            a:hover {
                text-decoration: none;
            }
            .buttons {
                margin-top: 5rem;
                color: #757575;
                text-align: center;
            }
            .buttons:hover {
                color:black;
                transform:scale(1.15); 
            }
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
            .hidden {
                visibility: hidden;
                padding-top: 1rem;
                font-weight: bold;
                margin-bottom: 0;
                padding-bottom: 0;
            }
            .small {
                margin-top: 0;
                padding-top: 0;
            }
            .buttons:hover .hidden{
                visibility: visible;
                
            }
        `}</style>
        </div>

    )
}

export default HomeLinks;