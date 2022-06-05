import React, {Component} from "react";
import "./Person.css";


const Person = (props) => {

    // const received_state = props.send_state;
    // const all_persons_arr = received_state.map((i) => {
    //     return(
    //         <div key={Math.random()}> 
    //             <div>{i.id}</div>
    //             <div>{i.name}</div>
    //             <div>{i.age}</div>
    //         </div>
    //     )
    // });

        return(
            <div className="Person">
                <div>
                    {props.id} 
                    {props.name}
                    {props.age} 
                </div>
            </div>
        )
    
}

export default Person;