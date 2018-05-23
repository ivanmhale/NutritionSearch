import React, { Component } from "react";
import Main from "./components/Main";
import Modal from './components/Modal';
import ResultsProvider from "./config/Provider";


class App extends Component {
  state={
    modal: false
  }
  render() {
    return (
      <ResultsProvider>
        <Main/>
        <Modal/>
      </ResultsProvider>
    );
  }
}

export default App;
