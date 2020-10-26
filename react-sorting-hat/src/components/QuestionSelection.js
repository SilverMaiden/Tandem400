import React, {useState,useRef, useLayoutEffect, useEffect} from "react";
import { gsap, TimelineLite,TweenLite, CSSPlugin} from "gsap";
const duration = 300;



const QuestionSelection = (props, {in: inProp}) => {
    let myId=0;
    let [answers, setAnswers] = useState([]);


    useEffect(() => {
        let tempList = props.incorrect
        if (!props.incorrect.includes(props.correct)) {
            tempList.push(props.correct);
            if (tempList.length < 4) {
                tempList.push("You can do this! :)");
            }
            tempList.sort(() => Math.random() - 0.5)
            setAnswers(tempList);
        } else {
            setAnswers(tempList);
        }

    }, props.incorrect)


    return (
                            <div className="formSpacing" ref={props.animationRef} >
                            {console.log(answers)}
                                <h4> {props.question} </h4>
                                {answers.map(element => (
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
