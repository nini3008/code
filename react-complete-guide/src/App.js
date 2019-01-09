import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "nick", age: 30 },
      { name: "Efe", age: 29 },
      { name: "Koreem", age: 20 }
    ]
  };
  switchNameHandler = () => {
    console.log("was clicked");
  };
  render() {
    return (
      <div className="App">
        <h1> Hi, i am react app</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          I also like racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
