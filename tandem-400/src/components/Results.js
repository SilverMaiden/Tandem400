import React, {useState, useRef, useEffect} from "react";
import { gsap, TimelineLite,TweenLite, CSSPlugin} from "gsap";
import blue_flowers from '../assets/blue_flowers.png';
import {Link} from 'react-router-dom';



const Results = (props) => {


    const timeline = new TimelineLite({ paused: true});
    const ref1 = useRef();

    console.log(props.userAnswers);

    useEffect(() => {
        timeline
          .add(TweenLite.from(ref1.current, 1, { opacity: 0 }))
          .play();
    }, []);


    return (
        <div className="position">
        <div ref={ref1} className="myBox">
            <h2>..And we're done!</h2>
            <img className="sortingHat" src={blue_flowers} alt="Harry Potter Cartoontransparent png image" />
            <h3>{props.points === 1 ? "You scored " + props.points + " point!"  : "You scored " + props.points + " points!"}</h3>
            <h4> Hopefully this was somewhat relaxing, and now you're ready to get back to work! </h4>
            <h5> (Although...you <b>could</b> always <Link to="/">take our quiz again...</Link>)</h5>
        </div>
    </div>
    )
}

export default Results;
