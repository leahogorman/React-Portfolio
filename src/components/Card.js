import React from 'react';
import CardInfo from '../components/CardInfo'
import { Row } from 'react-bootstrap';

function Card(props) {
    return(
        <div className="cardContainer">
            <Row className="cardImageContainer">
                <img className="cardImage" src={props.item.imgSrc} alt={props.item.imgSrc} />
            </Row>
            <CardInfo title={props.item.title} subTitle={props.item.subTitle} githubLink={props.item.githubLink} liveLink={props.item.liveLink} />
            <style jsx>{`
                .cardContainer {
                    margin: 20px;
                    width: 420px;
                    height: auto;
                    margin-bottom: 5rem;
                    margin-left: 2rem;
                    margin-right: 2rem;
                    padding: 10px;
                    background-color: rgba(120, 120, 120, .5);
                    border-radius: 10px;
                    box-shadow: 1px 1px 2px 10px  rgba(120, 120, 120, .5);
                }
                .cardImageContainer {
                    justify-content: center;
                }
                .cardImage {
                    border-radius: 10px 10px 0 0;
                    width: 400px;
                    height: auto;
                    flex-direction: row;
                    justify-content: center;
                }
                .cardContainer:hover .hidden {
                    visibility: visible;
                }
            `}</style>
        </div>
    )
}

export default Card;