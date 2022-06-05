import React, {Component} from "react";
import './App.css';
import Person from "./Components/Person/Person";

class App extends Component {

  state = {
    persons: [
      {id: 1, name: "ahmed", age: 8},
      {id: 2, name: "ibrahim", age: 10},
      {id: 3, name: "eissa", age: 12}
    ],
    otherState: "some other state value",
    showPersons: false
  };

  togglePersonsHandler = () => {
    const isShow = this.state.showPersons;
    this.setState({
      showPersons: !isShow
    });
  }

  render(){

    let persons_to_show = null;
    if (this.state.showPersons){
      persons_to_show = (
        <div>
            <Person 
                send_state={this.state.persons}
                id={this.state.persons[0].id}
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
            />
            <Person 
                send_state={this.state.persons}
                id=  {this.state.persons[0].id}
                name={this.state.persons[0].name}
                age= {this.state.persons[0].age}
            />
            <Person 
                send_state={this.state.persons}
                id={this.state.persons[0].id}
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
            /> 
        </div>
      )

    };



    return (
      <div className="App">
          <h1> hello from app</h1>
          <button onClick={this.togglePersonsHandler}> Toggle Persons </button>
          {persons_to_show}

      </div>
    );
  }
}

export default App;
