import React from "react";
import {Link} from 'react-router-dom';


const Welcome = () => {
    return (
        <div className=" position ">

        <div className="container">
                <div className="myBox ">
                <div className="welcomeDiv">
                    <h1>Welcome...</h1>
                    <img className="sortingHat" src="https://www.pngkit.com/png/full/167-1676806_harry-potter-sorting-hat-clipart.png" alt="Harry Potter Cartoontransparent png image" />
                    <h5> to Hogwarts School of Witchcraft and Wizardry!</h5>
                    <h6> Choices, choices... </h6>

                    <Link to="/sorting_quiz" style={{textDecoration: "none"}}><button className="welcomeButton"  > Put on the sorting hat </button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;


