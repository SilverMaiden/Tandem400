import React, {Component, createRef}from "react";
import {Link, Redirect} from "react-router-dom";
import QuestionSelection from "./QuestionSelection";
import Results from './Results';
import { gsap, TimelineLite,TweenLite, CSSPlugin} from "gsap";
import {sortingQuestions} from "../data";

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
        //Animation for question fade in on component mount
        this.onLoadTimeline
            .add(TweenLite.from(this.ref1.current, 2, { opacity: 0 }))
            .play();
        //Animation for black form box fade in on component mount
        /*this.onLoadTimelineForm
            .add(TweenLite.from(this.ref2.current, 5, { opacity: 0}))
            .play();
        */
        //Mount animation for the Forms height, so it transitions to the next height
        let myBox = document.getElementsByTagName('form');
        let prevHeightVal = this.ref1.current.style.height;
          this.boxTimeline
            .add(TweenLite.set(this.ref1.current, {height: "auto"}))
            .add(TweenLite.from(this.ref1.current,0.5, {height: prevHeightVal}))
          .play()
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
        this.setState({userAnswers});
        const setter = () => {
            if (this.state.index < 5) {
                let prevHeightVal = this.ref1.current.style.height;
                this.setState({
                    index: this.state.index += 1,
                });
                //Animation for the transition of the form when it changes height
                // automatically with the question sizes.
                let myBox = document.getElementsByTagName('form');
                  this.boxTimeline
                    .add(TweenLite.set(this.ref1.current, {height: "auto"}))
                    .add(TweenLite.from(this.ref1.current,0.5, {height: prevHeightVal}))
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



