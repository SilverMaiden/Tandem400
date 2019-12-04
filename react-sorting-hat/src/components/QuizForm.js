import React, {Component}from "react";
import {Link, Redirect} from "react-router-dom";
import QuestionSelection from "./QuestionSelection";
import Results from './Results';
import { gsap, TimelineLite,TweenLite, CSSPlugin} from "gsap";
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
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            checked: false,
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
        this.myElements = [];
        this.tl = new TimelineLite();
    }

    componentDidMount() {
        this.tl.staggerFrom(this.myElements, 2, {opacity:0, autoAlpha: 1}, 0.5);
    }


    toggleChangeHandler = e => {
        this.setState({checked:false})


    }

    handleSubmit = e => {
        e.preventDefault();
    }

    handleClick = e => {
       const property = e.target.name;
        const val = e.target.value;
        let userAnswers = {...this.state.userAnswers};
        userAnswers[[property]] = val;
        console.log(userAnswers);
        this.setState({userAnswers});


        if (this.state.index < 5) {
            this.setState({
                index: this.state.index += 1,

            });
        }
        if (this.state.index === 5) {
            this.setState({check: true})
        }
    }

    render() {

        let questionsAnswers = Object.values(this.state.userAnswers);


        return (
            <div>
{!questionsAnswers.includes('') ?
            <Results userAnswers={this.state.userAnswers} />
                 :
                    <div className="form-container">
                This is the Quiz Form.
                <form onSubmit={this.handleSubmit} onChange={this.handleFormChange} className="myborder">
                {// {this.state.sortingQuestions.map((singleQuestion, index) => (
                }
                        <div >
                            <div >
                            <QuestionSelection
                                name={this.state.sortingQuestions[this.state.index].name}
                                question={this.state.sortingQuestions[this.state.index].question}
                                answers={this.state.sortingQuestions[this.state.index].answers}
                                handleChange={this.toggleChangeHandler}
                                handleClick={this.handleClick}
                                checked={this.state.checked}
                            />
                            </div>
                        </div>
                    </form>
                </div>


        }
        </div>


        )
    }
}

export default QuizForm;



