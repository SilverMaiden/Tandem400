import React, {useState} from "react";

const QuestionSelection = (props) => {
    let myId=0;

    return (
                            <div className="column">
                            {console.log(props.checked)}
                                <h4> {props.question} </h4>
                                {props.answers.map(element => (
                                    myId=Math.random(),
                                   <div >
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
                                        <label className="answers" htmlFor={myId}>{element}</label>
                                    </div>
                                ))}
                            </div>

    )
}

export default QuestionSelection;
