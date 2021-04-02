import React from "react";

import HomeLinks from "../components/HomeLinks";
import Title from '../components/Title'
 
function HomePage(props) {
    return (
        <div className="homePage">
            <Title title={props.title}/>
            <HomeLinks />
            <style jsx>{`
                .homePage {
                    height: 82vh;
                }
                .brand {
                    display: none
                }
            `}</style>
        </div>
        );
}
export default HomePage;