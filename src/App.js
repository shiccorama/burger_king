import React, {Component} from "react";
import './App.css';
import Person from "./Components/Person/Person";
import ValidationComponent from "./Components/ValidationComponent/ValidationComponent";
import CharComponent from "./Components/CharComponent/CharComponent";

class App extends Component {

  state = {
    persons: [
      {id: 1, name: "ahmed", age: 8},
      {id: 2, name: "ibrahim", age: 10},
      {id: 3, name: "eissa", age: 12}
    ],
    otherState: "some other state value",
    showPersons: false,
    enteredText : ""
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

  lengthOfTextHandler = (e) => {
    this.setState({
      enteredText : e.target.value
    });
  }

  deleteCharHandler = (charIndex) =>{
    const charArray = this.state.enteredText.split("");
    charArray.splice(charIndex, 1);
    const joiningStrings = charArray.join("");
    this.setState({enteredText: joiningStrings})
    

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


    // remember, we use split with empty string to convert string into array :
    const charToShow = this.state.enteredText.split("").map((ch, charIndex) =>{
              return(
                  <CharComponent
                      character={ch}
                      key={charIndex}
                      deleteChar={(e) => this.deleteCharHandler(e, charIndex)}
                  />
              )
          });
        
    



    return (
      <div className="App">

          <h1> hello from app</h1>
          <button onClick={this.togglePersonsHandler}> Toggle Persons </button>
          {persons_to_show}
          <form>
            <label>Your length of text is : {this.state.enteredText.length}</label><br />
            <label>Enter your text here</label>
            <input type="textarea" onChange={this.lengthOfTextHandler} value={this.state.enteredText} />
            <p>{this.state.enteredText}</p>
            <ValidationComponent  textLength={this.state.enteredText.length}/>
            {charToShow}
          </form>

      </div>
    );
  }
}

export default App;
