import React from "react";

const QuestionSelection = (props) => {
    return (
        <div>
                <h4> {props.question.question} </h4>
                <div>
                    {props.question.answers.map(element => (
                       <div>
                        <input type="radio" name={element} value={element} />
                        <label>{element}</label>
                        </div>
                    ))}
                </div>
                <br />

        </div>

    )
}

export default QuestionSelection;
