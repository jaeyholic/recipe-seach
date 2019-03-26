import React, { Component } from "react";
import "./App.css";

//components
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
      </div>
    );
  }
}

export default App;
