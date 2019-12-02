import React from "react";

const QuestionSelection = (props) => {

    return (
        <>
            <h1> {props.question.question} </h1>

            <form>
                {props.question.answers.map(element => (
                    <li> {element} </li>
                ))}
            </form>
        </>

    )
}

export default QuestionSelection;
