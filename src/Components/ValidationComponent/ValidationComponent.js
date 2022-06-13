import React from "react";



const ValidationComponent = (props) =>{

    const checkTextLength = props.textLength;
    let validationMessage = "text length is too short !";

    if(checkTextLength >= 5){
        validationMessage = "text length is enough";
    }



    return(
        <div className="ValidationComponent">
            
            <p>{validationMessage}</p>

        </div>
    )
}





export default ValidationComponent;