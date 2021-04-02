import React from "react";
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import'react-bootstrap'
import './App.css';
import { Container, Navbar, Nav } from "react-bootstrap";

import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/About"
import ContactPage from "./pages/Contact"
import PortfolioPage from "./pages/Portfolio";
import ResumePage from "./pages/ResumePage";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      headerLinks: [
        {title: 'Home', path: '/portfolio'},
        {title: 'About', path: '/about'},
        {title: 'Portfolio', path: '/pastwork'},
        {title: 'Contact', path: '/contact'},
        {title: 'Resume', path: '/resume'}
      ],
      home: {
        title: "Leah O'Gorman",
      },
      about: {
        title: "Hi, I'm Leah",
        
      },
      portfolio: {
        title: "My Work",
      },
      contact: {
        title: "Contact Me",
      },
    }
  }

  render(){
    return [
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom justify-content-end" gb="transparent" expand="lg">
            <Navbar.Brand><Link className="nav-link brand" to="/portfolio">Leah O'Gorman</Link></Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/pastwork">Portfolio</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/portfolio" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>}/>
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} text={this.state.about.text}/>}/>
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} />}/>
          <Route path="/resume" exact render={() => <ResumePage />}/>
          <Route path="/pastwork" exact render={() => <PortfolioPage title={this.state.portfolio.title} subtitle={this.state.portfolio.subtitle} text={this.state.portfolio.text}/>}/>
          <Footer />
        </Container>
      </Router>
    ]
  }
}


export default App;
