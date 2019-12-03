import React, {Component}from "react";
import {Link} from "react-router-dom";
import QuestionSelection from "./QuestionSelection";
let sortingQuestions =  [
    {
        question: "Which of the following would you most hate people to call you?",
        answers: ["Ordinary", "Ignorant", "Cowardly", "Selfish"],
        name: "qAnswer1"
    },

    {
        question: "Given the choice, would you rather invent a potion that would guarantee you:",
        answers: ["Glory", "Wisdom", "Love", "Power"],
        name: "qAnswer2"
    },

    {
        question: "How would you like to be known to history?",
        answers: ["The Wise", "The Good", "The Bold", "The Brave"],
        name: "qAnswer3",
    },
    {
        question: "You enter an enchanted garden. What would you be most curious to examine first?",
        answers: [
                    "The silver leafed tree bearing golden apples",
                    "The fat red toadstools that appear to be talking to each other",
                    "The bubbling pool, in the depths of which something luminous is swirling",
                    "The statue of an old wizard with a strangely twinkling eye"
                ],
        name: "qAnswer4"
    },
    {
        question: "Four boxes are placed before you. Which would you try and open?",
        answers: [
                    "The small tortoiseshell box, embellished with gold, inside which some small creature seems to be squeaking.",
                    "The gleaming jet black box with a silver lock and key, marked with a mysterious rune that you know to be the mark of Merlin.",
                    "The ornate golden casket, standing on clawed feet, whose inscription warns that both secret knowledge and unbearable temptation lie within.",
                    "The small pewter box, unassuming and plain, with a scratched message upon it that reads: I open only for the worthy."
                ],
        name: "qAnswer5"
    },
    {
        question: "Which of the following do you find most difficult to deal with?",
        answers: ["Hunger", "Cold", "Boredom", "Loneliness"],
        name: "qAnswer6"
    }



]

class QuizForm extends Component {
    constructor() {
        super();
        this.state = {
            sortingQuestions: sortingQuestions,
            userAnswers: {
                qAnswer1: '',
                qAnswer2: '',
                qAnswer3: '',
                qAnswer4: '',
                qAnswer5: '',
                qAnswer6: ''
            }
        }
    }

    toggleChangeHandler = e => {
        const property = e.target.name;
        const val = e.target.value;
        let userAnswers = {...this.state.userAnswers};
        userAnswers[[property]] = val;
        this.setState({userAnswers});
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.userAnswers);
    }

    render() {
        return (
            <div>
                This is the Quiz Form.
                <form onSubmit={this.handleSubmit}>
                {this.state.sortingQuestions.map(singleQuestion => (
                        <div>
                            <QuestionSelection
                                name={singleQuestion.name}
                                question={singleQuestion.question}
                                answers={singleQuestion.answers}
                                handleChange={this.toggleChangeHandler}
                            />
                        </div>
                ))}
                <Link to={{
                    pathname: '/results',
                    state: {
                        userAnswers: this.state.userAnswers
                    }
                }}><button>Get Results</button></Link>
                </form>

            </div>
        )
    }
}

export default QuizForm;



