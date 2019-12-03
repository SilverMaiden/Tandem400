import React from "react";

const HousePage = (props) => {
    return (
        <div>
            <p> Your house is: {props.house}. </p>
            <img src={props.data.img} />
            <p> {props.data.house_song} </p>
            <p> {props.data.house_description} </p>
        </div>
    )
}

export default HousePage;
