import React from "react";
import {Link} from 'react-router-dom';


const Welcome = () => {
    return (
        <div>
        <h5>Welcome!</h5>

        <Link to="/sorting_quiz"><button> Go To Quiz </button></Link>
        </div>
    )
}

export default Welcome;


