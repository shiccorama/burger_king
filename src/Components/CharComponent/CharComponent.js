import React from "react";
import "./CharComponent.css";


const CharComponent = (props) => {

    // const receivedString = props.character;


    return(
        <div className="CharComponent">

            <div onClick={props.deleteChar}>{props.character}</div> 
            

        </div>
    )
}


export default CharComponent;
