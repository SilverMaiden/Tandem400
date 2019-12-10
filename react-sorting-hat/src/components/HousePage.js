import React from "react";

const HousePage = (props) => {
    let houseClass = props.house.toString().toLowerCase();
    return (
        <div className="container">
            <h3> Your house is: {props.house}. </h3>
            <img className="crest" src={props.data.img} />
            <h5> {props.data.house_song} </h5>
            <p> {props.data.house_description} </p>
        </div>
    )
}

export default HousePage;
