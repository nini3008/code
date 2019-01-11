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
  switchNameHandler = names => {
    this.setState({
      persons: [
        { name: "James", age: 30 },
        { name: names, age: 29 },
        { name: "Korim", age: 25 }
      ]
    });
  };

  nameHandlerChange = event => {
    this.setState({
      persons: [
        { name: "James", age: 30 },
        { name: event.target.value, age: 29 },
        { name: "Korim", age: 25 }
      ]
    });
  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h1> Hi, i am react app</h1>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, "nicoposss")}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "nicopo")}
          nameHandlerChange={this.nameHandlerChange}
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
