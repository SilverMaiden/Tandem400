import React from "react";

const houses = {
    Gryffindor: {
                    answers: [
                        "Cowardly",
                        "Glory",
                        "The Brave",
                        "The statue of an old wizard with a strangely twinkling eye",
                        "The small pewter box, unassuming and plain, with a scratched message upon it that reads: I open only for the worthy.",
                        "Boredom"
                    ],
    },

    RavenClaw: {
                        answers: [
                            "Ignorant",
                            "Wisdom",
                            "The Wise",
                            "The bubbling pool, in the depths of which something luminous is swirling",
                            "The gleaming jet black box with a silver lock and key, marked with a mysterious rune that you know to be the mark of Merlin.",
                            "Hunger"
                        ],

    },

    HufflePuff: {
                        answers: [
                            "Selfish",
                            "Love",
                            "The Good",
                            "The fat red toadstools that appear to be talking to each other",
                            "The small tortoiseshell box, embellished with gold, inside which some small creature seems to be squeaking.",
                            "Cold"
                        ],
    },
    Slytherin: {
                        answers: [
                            "Ordinary",
                            "Power",
                            "The Bold",
                            "The silver leafed tree bearing golden apples",
                            "The gleaming jet black box with a silver lock and key, marked with a mysterious rune that you know to be the mark of Merlin.",
                            "Loneliness"
                ],
    }
}

const Results = (props) => {

    let userAnswers = Object.values(props.location.state.userAnswers);

    let pointsList = {G: 0, R: 0, H:0, S: 0};


    userAnswers.map(answer => {
        if (houses.RavenClaw.answers.includes(answer)){
            pointsList.R += 1;
        } else if (houses.Gryffindor.answers.includes(answer)){
            pointsList.G += 1;
        } else if (houses.HufflePuff.answers.includes(answer)){
            pointsList.H += 1;
        } else if (houses.Slytherin.answers.includes(answer)){
            pointsList.S += 1;
        } else {
            console.log("Something has gone wrong :(");
        }
    })

    console.log(pointsList);
    let max=0;
    let userHouse = '';
    let valArr = [];

    let pointsKeys = Object.keys(pointsList);
    let pointsVals = Object.values(pointsList);
    console.log(pointsKeys, pointsVals);

    //Now for some calculations
    return (
        <div>
            <h1> Here are your results!</h1>
            <p> You are a {userHouse} </p>
        </div>
    )
}

export default Results;
