import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table.jsx";
import Search from "./components/Search.jsx";

const list = [
  {
    id: 0,
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    id: 1,
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    id: 2,
    title: "Node",
    url: "https://github.com/nodejs/node",
    author: "Ryan Dahl",
    num_comments: 11,
    points: 5,
    objectID: 2,
  },
  {
    id: 3,
    title: "MongoDB",
    url: "https://github.com/mongodb/mongo",
    author: "Eliot Horowitz",
    num_comments: 7,
    points: 4,
    objectID: 3,
  },
  {
    id: 4,
    title: "Express",
    url: "https://github.com/expressjs/express",
    author: "TJ Holowaychuk",
    num_comments: 4,
    points: 5,
    objectID: 4,
  },
];
const isSearched = (searchTerm) => (item) =>
  !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      searchTerm: "",
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }
  //or make onDismiss(id) arrow function, then i dont need to use this.onDismiss = this.onDismiss.bind(this);
  onDismiss(id) {
    const updatedList = this.state.list.filter((item) => item.objectID !== id);
    this.setState({ list: updatedList });
  }
  onSearchChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="page">
        <div className="interactions">
          <Search value={searchTerm} onChange={this.onSearchChange}>
            Search
          </Search>
        </div>
        <Table
          list={list.filter(isSearched(searchTerm))}
          query={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

export default App;
