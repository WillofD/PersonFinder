import React, { Component } from "react";
import "./App.css";
import { CardList } from "./Components/Card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Pirates: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) => this.setState({ Pirates: users }));
  }
  render() {
    return (
      <div className="App">
        <CardList pirates={this.state.Pirates}></CardList>
      </div>
    );
  }
}

export default App;
