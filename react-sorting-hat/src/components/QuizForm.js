import React, {Component}from "react";
import QuestionSelection from "./QuestionSelection";
let sortingQuestions =  {
    question1: {
        question: "Which of the following would you most hate people to call you?",
        answers: ["Ordinary", "Ignorant", "Cowardly", "Selfish"]
    },

    question2: {
        question: "Given the choice, would you rather invent a potion that would guarantee you:",
        answers: ["Glory", "Wisdom", "Love", "Power"]
    },

    question3: {
        question: "How would you like to be known to history?",
        answers: ["The Wise", "The Good", "The Bold", "The Brave"]
    }
}

class QuizForm extends Component {


    render() {
        return (
            <>
                This is the Quiz Form.
                    <QuestionSelection question={sortingQuestions.question1} />
                    <QuestionSelection question={sortingQuestions.question2} />
                    <QuestionSelection question={sortingQuestions.question3} />
            </>
        )
    }
}

export default QuizForm;



