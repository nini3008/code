import React, { Component } from "react";
import UserInput from "./Component/UserInput";
import UserOutput from "./Component/UserOutput";
import "./App.css";

class App extends Component {
  state = {
    users: [{ username: "nick" }, { username: "Efe" }]
  };

  nameHandlerChange = event => {
    this.setState({
      users: [{ username: "Fred" }, { username: "James" }]
    });
  };
  handleInput = event => {
    this.setState({
      users: [
        { username: event.target.value },
        { username: event.target.value }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Assigment One</h1>
        </header>
        <button onClick={this.nameHandlerChange}> Switch </button>
        <UserInput handleInput={this.handleInput} />
        <UserOutput username={this.state.users[0].username} />
        <UserOutput username={this.state.users[1].username} />
      </div>
    );
  }
}

export default App;
