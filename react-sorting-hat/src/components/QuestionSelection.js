import React, {useState} from "react";

const QuestionSelection = (props) => {

    return (
                            <div>
                                <h4> {props.question} </h4>
                                {props.answers.map(element => (
                                   <div>
                                        <input
                                            type="radio"
                                            name={props.name}
                                            value={element}
                                            onChange={props.handleChange}
                                        />
                                        <label>{element}</label>
                                    </div>
                                ))}
                            </div>

    )
}

export default QuestionSelection;
