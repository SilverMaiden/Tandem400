import React, {Component, createRef}from "react";
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
            exiting: false,
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
        this.timeline = new TimelineLite({ paused: true });
        this.onLoadTimeline = new TimelineLite({ paused: true});
        this.onLoadTimelineForm = new TimelineLite({ paused: true});
        this.boxTimeline = new TimelineLite({paused: true});
        this.ref1 = createRef();
        this.ref2 = createRef();


    }

    componentDidMount() {
        this.onLoadTimeline
            .add(TweenLite.from(this.ref1.current, 2, { opacity: 0 }))
            .play();
        this.onLoadTimelineForm
            .add(TweenLite.from(this.ref2.current, 2, { opacity: 0}))
            .play();


    }

    toggleChangeHandler = e => {
        this.setState({checked:false})


    }

    handleSubmit = e => {
        e.preventDefault();
    }

    handleClick = e => {
        const currentIndex = this.state.index;
        const property = e.target.name;
        const val = e.target.value;
        let userAnswers = {...this.state.userAnswers};
        userAnswers[[property]] = val;
        console.log(userAnswers);
        this.setState({userAnswers});
        const setter = () => {
            if (this.state.index < 5) {
                let prevHeightVal = this.ref1.current.style.height;
                this.setState({
                    index: this.state.index += 1,
                });
                let myBox = document.getElementsByTagName('form');
                  this.boxTimeline
                    .add(TweenLite.set(this.ref1.current, {height: "auto"}))
                    .add(TweenLite.from(this.ref1.current,0.75, {height: prevHeightVal}))
                  .play()
            }

            if (this.state.index === 5) {
                this.setState({check: true})
            }

            this.timeline
              .reverse();
        }

        setTimeout(setter, 1000);



        if (currentIndex === this.state.index) {
            this.timeline
              .add(TweenLite.to(this.ref1.current, 1, { opacity: 0 }))
              .play();
        }
    }
    render() {

        let questionsAnswers = Object.values(this.state.userAnswers);


        return (
            <div className="position">
            {!questionsAnswers.includes('') ?
                <Results userAnswers={this.state.userAnswers} />
                     :
                <div className="container">
                    <form ref={this.ref2} id="#myForm" onSubmit={this.handleSubmit} className="myBox">
                                <QuestionSelection
                                    name={this.state.sortingQuestions[this.state.index].name}
                                    question={this.state.sortingQuestions[this.state.index].question}
                                    answers={this.state.sortingQuestions[this.state.index].answers}
                                    handleChange={this.toggleChangeHandler}
                                    handleClick={this.handleClick}
                                    checked={this.state.checked}
                                    animationRef={this.ref1}
                                    timeline={this.timeline}
                                    index={this.state.index}
                                />
                        </form>
                    </div>
            }
        </div>


        )
    }
}

export default QuizForm;



