import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

function Title(props) {

    return(
        <div className="homePageContainer">
            <div className="titleContainer">
                { props.title && <h1 className="title justify-content-center display-1 font-weight-bolder">{props.title}</h1> }
            </div>
            <style jsx>{`
                .homePageContainer {
                    height: 35vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                }
                .titleContainer {
                    text-align: center;
                }
                .title {
                    font-size: 7rem;
                }
            `}</style>
        </div>

    )

}
export default Title;