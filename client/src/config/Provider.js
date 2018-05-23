import React, { Component } from "react";
import ResultsContext from "./Context";
import seed from "./seed.json";

export default class ResultsProvider extends Component {
  state = {
    results: seed
  };
  render() {
    return (
      <ResultsContext.Provider
        value={{
          results: this.state.results,
          search: (term) =>
            fetch(`/search/${term}`)
              .then(res => res.json())
              .then(parsed => this.setState({ results: parsed }))
        }}
      >
        {this.props.children}
      </ResultsContext.Provider>
    );
  }
}
