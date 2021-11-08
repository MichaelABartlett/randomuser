import React from "react";
import { useState, useEffect } from "react";

let buttonStyle = {
    margin: '0 0 15px 0'
}



function PeopleList(props) {
    const [isLiked, SetIsLiked] = useState(false);

    useEffect(() => {
        console.log(isLiked);
    }, [isLiked]);

    let handleClick = (props) => {
        console.log(buttonStyle)
    SetIsLiked(!isLiked);
    }

    return(
        <li style={{ listStyle: "none"}} >
           <img src={props.picture} alt={props.firstName} />
           <h5>{props.firstName}</h5>
           <h5>{isLiked === false ? <p></p> : <p>{props.email}</p>}</h5>
           <h5>{isLiked === false ? <p></p> : <p>{`${props.city}, ${props.country} `}</p>}</h5>
           <button style={buttonStyle} onClick={handleClick}>{isLiked === false ? "Show Details" : "Hide Details"}</button>
           <p>______________________________________________________________________</p>
        </li>
    )
}

export default PeopleList;
