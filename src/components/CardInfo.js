import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Row } from 'react-bootstrap';

function CardInfo(props){

    return(
        <div className="cardInfo">
                <h3 className="cardTitle">{props.title}</h3>
                <p className="cardSubTitle hidden">{props.subTitle}</p>
                <Row className="buttons">
                    <a className="githubBtn" type="button" href={props.githubLink} target="_blank" rel="noopener noreferrer"><FaGithub size={50}/></a>
                    <a className="liveSiteBtn" type="button" href={props.liveLink} target="_blank" rel="noopener noreferrer">View</a>
                </Row>
                <style jsx>{`
                .cardInfo {
                    text-align: left;
                    background-color: white;
                    margin-botton: 0;
                    border-radius: 0 0 10px 10px;
                }
                .cardTitle {
                    padding-bottom: 5px
                    display: block;
                    text-align: center;
                    padding: .5rem;
                    background-color: rgba(120, 120, 120, .5);
                    color: black;
                    font-weight: bolder;
                    margin-bottom: 0;
                }
                .cardSubTitle {
                    margin-top: 0;
                    margin-bottom: 0;
                    display: block;
                    background-color: white;
                }
                .buttons {
                    margin-top: 0;
                    justify-content: space-between;
                    position: relative;
                }
                .githubBtn {
                    color: rgba(120, 120, 120, 1);
                    margin-left: 3rem;
                    padding: 1rem;
                }
                .githubBtn:hover {
                    color: black;
                    transform:scale(1.15);

                }
                .liveSiteBtn {
                    text-align: right;
                    position: absolute;
                    bottom: 35%;
                    right: 10%;
                    margin-right: 3rem;
                    font-size: 1.45rem;
                    font-weight: bold;
                    color: rgba(120, 120, 120, 1);
                }
                .liveSiteBtn:hover {
                    text-decoration: none;
                    transform:scale(1.15);
                    color: black;
                }
                .hidden {
                    visibility: hidden;
                }
            `}</style>
        </div>

    )

}
export default CardInfo