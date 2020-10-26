import React from "react";
import {Link} from 'react-router-dom';
import blue_flowers from '../assets/blue_flowers.png';


const Welcome = () => {
    return (
        <div className=" position ">

        <div className="container">
                <div className="myBox ">
                <div className="welcomeDiv">
                    <h2>Welcome to...</h2>
                    <h1>Tandem of 400!</h1>
                    <img className="sortingHat" src={blue_flowers} alt="blue flower png image" />
                    <h5> Take a break. Stay a while.</h5>

                    <Link to="/quiz" style={{textDecoration: "none"}}><button className="welcomeButton"  > Let's Start! </button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;


