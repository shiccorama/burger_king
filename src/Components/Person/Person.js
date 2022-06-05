import React, {Component} from "react";
import "./Person.css";


const Person = (props) => {

    const recieved_state = props.send_state;
    const all_persons_arr = recieved_state.map((i) => {
        return(
            <div key={Math.random()}> 
                <div>{i.id}</div>
                <div>{i.name}</div>
                <div>{i.age}</div>
            </div>
        )
    });

        return(
            <div className="Person">
                <div> {all_persons_arr} </div>
            </div>
        )
    
}

export default Person;