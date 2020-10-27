import React from "react";
import {Link} from 'react-router-dom';
import blue_flowers from '../assets/blue_flowers.png';


const Welcome = () => {
    return (
        <div className=" position ">

                <div className="myBox">
                    <h2>Welcome to...</h2>
                    <h1>Tandem of 400!</h1>
                    <img className="sortingHat" src={blue_flowers} alt="blue flower png image" />
                    <h4> Relax. Take Our Quiz.</h4>
                    <h5> Sometimes you've got to just take a break, step away, and breathe. :)</h5>

                    <Link to="/quiz" style={{textDecoration: "none"}}><button className="welcomeButton"  > Let's Start! </button></Link>
                    </div>
        </div>
    )
}

export default Welcome;


