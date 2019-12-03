import React from "react";
const Gryffindor = {
                    answers: [
                        "Cowardly",
                        "Glory",
                        "The Brave",
                        "The statue of an old wizard with a strangely twinkling eye",
                        "The small pewter box, unassuming and plain, with a scratched message upon it that reads: I open only for the worthy.",
                        "Boredom"
                    ],
    quiz_Points: 0
}

const RavenClaw = {
                    answers: [
                        "Ignorant",
                        "Wisdom",
                        "The Wise",
                        "The bubbling pool, in the depths of which something luminous is swirling",
                        "The gleaming jet black box with a silver lock and key, marked with a mysterious rune that you know to be the mark of Merlin.",
                        "Hunger"
                    ],
    quiz_Points: 0

}

const HufflePuff = {
                    answers: [
                        "Selfish",
                        "Love",
                        "The Good",
                        "The fat red toadstools that appear to be talking to each other",
                        "The small tortoiseshell box, embellished with gold, inside which some small creature seems to be squeaking.",
                        "Cold"
                    ],
    quiz_Points: 0
}
const Slytherin ={
                    answers: [
                        "Ordinary",
                        "Power",
                        "The Bold",
                        "The silver leafed tree bearing golden apples",
                        "The gleaming jet black box with a silver lock and key, marked with a mysterious rune that you know to be the mark of Merlin.",
                        "Loneliness"
    ],
    quiz_Points: 0
}

const Results = (props) => {

    let userAnswers = Object.values(props.location.state.userAnswers);


    userAnswers.map(answer => {
        if (RavenClaw.answers.includes(answer)){
            RavenClaw.quiz_Points += 1;
        } else if (Gryffindor.answers.includes(answer)){
            Gryffindor.quiz_Points += 1;
        } else if (HufflePuff.answers.includes(answer)){
            HufflePuff.quiz_Points += 1;
        } else if (Slytherin.answers.includes(answer)){
            Slytherin.quiz_Points += 1;
        } else {
            console.log("Something has gone wrong :(");
        }
    })

    let max=0;
    let userHouse = '';
    let pointsArr = [
                        {House: "RavenClaw", points: RavenClaw.quiz_Points},
                        {House: "HufflePuff", points: HufflePuff.quiz_Points},
                        {House: "Gryffindor", points: Gryffindor.quiz_Points},
                        {House:"Slytherin", points: Slytherin.quiz_Points}];
    pointsArr.forEach((obj) => {
        if (obj.points > max) {
            max = obj.points;
            userHouse = obj.House;
        }

    })
    console.log(pointsArr);
    console.log(userHouse);

    //Now for some calculations
    return (
        <h1> Here are your results!</h1>
    )
}

export default Results;
