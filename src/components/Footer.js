import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {

    return(
        <footer className="mt-5">
            <Container className="sticky-bottom" fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="pr-5 d-flex justify-content-center">
                        Leah O'Gorman © 2021
                    </Col>
                </Row>
            </Container>
        </footer>
    )

}
export default Footer;