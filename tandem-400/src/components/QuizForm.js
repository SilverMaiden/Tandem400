import React, {Component, createRef}from "react";
import QuestionSelection from "./QuestionSelection";
import Results from './Results';
import { gsap, TimelineLite,TweenLite, CSSPlugin} from "gsap";
import * as data from "../Apprentice_TandemFor400_Data.json";

const C = CSSPlugin;
const sortingQuestions = data.default.sort(() => Math.random() - 0.5);

const STARTING_POINTS = 0;


class QuizForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exiting: false,
            index: 0,
            checked: false,
            sortingQuestions: sortingQuestions,
            points: STARTING_POINTS
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
        console.log(myBox)
        let prevHeightVal = this.ref1.current.style.height;
        console.log(prevHeightVal)
    //       this.boxTimeline
    //         .add(TweenLite.set(this.ref1.current, {height: "auto"}))
    //         .add(TweenLite.from(this.ref1.current,0.5, {height: prevHeightVal}))
    //       .play()
    // 
}

    toggleChangeHandler = e => {
        this.setState({checked:false})
    }

    handleSubmit = e => {
        e.preventDefault();
    }

    handleClick = e => {
        const currentIndex = this.state.index;
        const val = e.target.value;
        if (val === this.state.sortingQuestions[this.state.index].correct) {
            this.setState({points: this.state.points += 1});
        }
        const setter = () => {
            if (this.state.index < 9) {
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
            } else {
                this.setState({checked: true});
            }

            this.timeline
              .reverse();
        }

        setTimeout(setter, 700);



        if (currentIndex === this.state.index) {
            this.timeline
              .add(TweenLite.to(this.ref1.current, 0.7, { opacity: 0 }))
              .play();
        }
    }
    render() {

        return (
            <div className="position">
                
            {this.state.checked ?
                <Results 
                    points={this.state.points}
                    />
                     :
                <div className="myBox">
                    <form ref={this.ref2} id="#myForm" onSubmit={this.handleSubmit} className="container">
                                <QuestionSelection
                                    question={this.state.sortingQuestions[this.state.index].question}
                                    incorrect={this.state.sortingQuestions[this.state.index].incorrect}
                                    correct={this.state.sortingQuestions[this.state.index].correct}
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



