import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

function Hero(props) {

    return(
      <div>
          <h1>{props.title}</h1>
          <h3>{props.subTitle}</h3>
          <h5>{props.text}</h5>
      </div>
    )

}
export default Hero;