import React, { Component } from "react";
import ResultsContext from "./Context";
import seed from "./seed.json";

import { connect } from "react-redux";
import { results } from "../actions";

class ResultsProvider extends Component {
  componentDidMount() {
    this.props.results(this.state.results);
  }

  componentDidUpdate() {
    this.props.results(this.state.results);
  }

  state = {
    results: seed,
    selected: null
  };

  render() {
    return (
      <ResultsContext.Provider
        value={{
          results: this.state.results,
          selected: this.state.selected,
          search: term =>
            fetch(`/search/${term}`)
              .then(res => res.json())
              .then(parsed => {
                this.setState({ results: parsed });
              }),
          select: id => {
            fetch(`lookup/${id}`)
              .then(res => res.json())
              .then(parsed => {
                this.setState({ selected: parsed });
              });
          },
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

const mapDispatchToProps = dispatch => {
  return {
    results: data => dispatch(results(data))
  };
};

export default connect(null, mapDispatchToProps)(ResultsProvider);
