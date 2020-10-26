import React, {useState, useRef, useEffect} from "react";
import { gsap, TimelineLite,TweenLite, CSSPlugin} from "gsap";
import blue_flowers from '../assets/blue_flowers.png';



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
        <div ref={ref1} className="myBox">
            <h2>..And we're done!</h2>
            <img className="sortingHat" src={blue_flowers} alt="Harry Potter Cartoontransparent png image" />
            <h3>{props.points === 1 ? "You scored " + props.points + " point!"  : "You scored " + props.points + " points!"}</h3>
        </div>
    )
}

export default Results;
