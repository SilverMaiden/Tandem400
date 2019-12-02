import React, {Component}from "react";
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
                <form>
                    {sortingQuestions.question1.answers.map(() => {
                        console.log("Woot");
                        })
                    }
                </form>
            </>
        )
    }
}

export default QuizForm;



