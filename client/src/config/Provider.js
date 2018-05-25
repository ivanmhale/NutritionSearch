import React, { Component } from "react";
import ResultsContext from "./Context";
import seed from "./seed.json";

export default class ResultsProvider extends Component {
  state = {
    results: seed,
    selected: null,
    list: "ASD"
  };
  render() {
    return (
      <ResultsContext.Provider
        value={{
          results: this.state.results,
          selected: this.state.selected,
          list: this.state.list,
          search: term =>
            fetch(`/search/${term}`)
              .then(res => res.json())
              .then(parsed => this.setState({ results: parsed })),
          select: id =>
            fetch(`lookup/${id}`)
              .then(res => res.json())
              .then(parsed => this.setState({ selected: parsed })),
          unselect: () => {
            this.setState({ selected: null });
          }
        }}
      >
        {this.props.children}
      </ResultsContext.Provider>
    );
  }
}
