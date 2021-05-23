import React, { Component } from "react";
import "./App.css";
import { CardList } from "./Components/Card-list/card-list.component";
import { SearchBox } from "./Components/Search-box/Search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Pirates: [],
      SearchFields: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) => this.setState({ Pirates: users }));
  }

  handleChange = (e) => {
    this.setState({ SearchFields: e.target.value });
  };
  render() {
    const { Pirates, SearchFields } = this.state;
    const filterPirates = Pirates.filter((pirates) =>
      pirates.name.toLowerCase().includes(SearchFields.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Pirates Searcher</h1>
        <SearchBox
          placeholder="Search Pirates"
          handleChange={this.handleChange}
        />
        <CardList pirates={filterPirates}></CardList>
      </div>
    );
  }
}

export default App;
