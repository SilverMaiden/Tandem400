import React, {useState,useRef, useLayoutEffect, useEffect} from "react";
import { gsap, TimelineLite,TweenLite, CSSPlugin} from "gsap";
const duration = 300;



const QuestionSelection = (props, {in: inProp}) => {
    let myId=0;
    let myRef = useRef(null);


    return (
                            <div className="formSpacing" ref={props.animationRef} >
                            {console.log(props.checked)}
                                <h4> {props.question} </h4>
                                {props.answers.map(element => (
                                    myId=Math.random(),
                                   <div  >
                                        {console.log}
                                        <input

                                            id={myId}
                                            type="radio"
                                            checked= {props.checked}
                                            name={props.name}
                                            value={element}
                                            onChange={props.handleChange}
                                            onClick={props.handleClick}
                                        />
                                        <label className="answers labelText" htmlFor={myId}>{element}</label>
                                    </div>
                                ))}
                            </div>

    )
}

export default QuestionSelection;
