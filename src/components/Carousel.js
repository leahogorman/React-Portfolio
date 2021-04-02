import React from 'react';
import { Container, Row  } from 'react-bootstrap';

import Burgers from '../assets/images/BurgerTime.jpg';
import ChatApp from '../assets/images/Chatroom.jpg';
import Quiz from '../assets/images/GGQuiz.jpg';
import Project1 from '../assets/images/Project-1.jpg';
import Project3 from '../assets/images/Project-3.jpg';
import WeatherDashboard from '../assets/images/WeatherDashboard.jpg';
import WorkSchedule from '../assets/images/Work-Day-Schedule.png';

import Card from '../components/Card'

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Quiz App',
                    subTitle: 'App allows the user to answer questions, add score, and save high score to local storage',
                    imgSrc: Quiz,
                    githubLink: 'https://github.com/leahogorman/GG_TriviaNight',
                    liveLink: 'https://leahogorman.github.io/GG_TriviaNight/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Work Day Scheduler',
                    subTitle: 'App allows users to enter information for a work day scheduler and save it to local storage',
                    imgSrc: WorkSchedule,
                    githubLink: 'https://github.com/leahogorman/Daily-Planner',
                    liveLink: 'https://leahogorman.github.io/Daily-Planner/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Weather Dashboard',
                    subTitle: 'App allows users to search for different cities and find the current weather and 7 day forcast',
                    imgSrc: WeatherDashboard,
                    githubLink: 'https://github.com/leahogorman/Weather-App',
                    liveLink: 'https://leahogorman.github.io/Weather-App/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'BurgerTime',
                    subTitle: 'App allows users to enter new burgers and save them as eatable or eaten',
                    imgSrc: Burgers,
                    githubLink: 'https://github.com/leahogorman/Burger_Logger',
                    liveLink: 'https://arcane-reaches-79904.herokuapp.com/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Job.r',
                    subTitle: 'App allows users to search for and find both job postings and reference books on a topic',
                    imgSrc: Project1,
                    githubLink: 'https://github.com/leahogorman/Job.Rr',
                    liveLink: 'https://leahogorman.github.io/Job.Rr/',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Drastic Measurements',
                    subTitle: 'App allows users to sign in, enter measurement information, and look up measurement information for individuals entered',
                    imgSrc: Project3,
                    githubLink: 'https://github.com/leahogorman/Drastic-Measurements',
                    liveLink: 'https://vast-taiga-98028.herokuapp.com/',
                    selected: false
                },
                {
                    id: 6,
                    title: 'Chat App',
                    subTitle: 'App allows users to sign in, create chatrooms, and chat with others logged in',
                    imgSrc: ChatApp,
                    githubLink: 'https://github.com/leahogorman/Chat-App',
                    liveLink: 'https://stark-springs-75145.herokuapp.com/index.html',
                    selected: false
                },
            ]
          }
    }


    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        })

        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item =>{
            return <Card item = {item} onClick={(event => this.handleCardClick(item.id, event))} key={item.id} />
        })
    }

    render() {
        return(
            <div>
                <Container fluid={true} className="carouselContainer">
                    <Row className="justify-content-around">
                        {this.makeItems(this.state.items)}
                    </Row>
                </Container>
                <style jsx>{`
                .carouselContainer {
                    margin-top: 5rem;
                    max-width: 1500px;
                }
            `}</style>
            </div>

        )
    }

}
export default Carousel;