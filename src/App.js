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

  deletePersonHandler = (person_index) => {
    const persons_after_deleting = [...this.state.persons];
    persons_after_deleting.splice(person_index, 1);
    this.setState({persons: persons_after_deleting});
  }

  render(){

    let persons_to_show = null;
    if (this.state.showPersons){
      persons_to_show = (
        <div>

          { this.state.persons.map((i, person_index) => {
              return(
                <Person 
                  
                  key = {Math.random()}
                  id = {i.id}
                  name = {i.name}
                  age = {i.age}
                  clickMe = {() => this.deletePersonHandler(person_index)}
                />
              )
            })
          }

        </div>
      );

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
