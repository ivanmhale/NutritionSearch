import React, { Component } from "react";
import ResultsContext from "./Context";
import seed from "./seed.json";

export default class ResultsProvider extends Component {
  state = {
    results: seed,
    selected: null,
  };
  render() {
    return (
      <ResultsContext.Provider
        value={{
          results: this.state.results,
          search: (term) =>
            fetch(`/search/${term}`)
              .then(res => res.json())
              .then(parsed => this.setState({ results: parsed })),
          select: id =>
          fetch(`lookup/${id}`)
          .then(res => res.json())
          .then(parsed =>
            console.log(parsed)
          //  this.setState({ selected: parsed})
          )
        }}
      >
        {this.props.children}
      </ResultsContext.Provider>
    );
  }
}
