import React, { Component } from "react";
import ResultsContext from "../config/Context";
import { connect } from "react-redux";
import { sort } from "../actions";

class Results extends Component {
  state = {
    sorted: "null"
  };

  renderResults(data) {
    if (!data) {
      return;
    }
    if (
      this.props.sortMethod == "item_name" ||
      this.props.sortMethod === "brand_name" ||
      this.props.sortMethod === "nf_calories"
    ) {
      var property = this.props.sortMethod;

      function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const A = a.fields[property].toUpperCase();
        const B = b.fields[property].toUpperCase();

        let comparison = 0;
        if (A > B) {
          comparison = 1;
        } else if (A < B) {
          comparison = -1;
        }
        return comparison;
      }

      function reverseCompare(a, b) {
        // Use toUpperCase() to ignore character casing
        const A = a.fields[property].toUpperCase();
        const B = b.fields[property].toUpperCase();

        let comparison = 0;
        if (B > A) {
          comparison = 1;
        } else if (B < A) {
          comparison = -1;
        }
        return comparison;
      }

      console.log(property);
      console.log(this.state.sorted);

      if (property === "item_name" && this.state.sorted === "item_name") {
        data.sort(reverseCompare);
      } else if (
        property === "brand_name" &&
        this.state.sorted === "brand_name"
      ) {
        data.sort(reverseCompare);
      } else if (
        property === "nf_calories" &&
        this.state.sorted === "nf_calories"
      ) {
        data.sort((a,b)=>{
          console.log(a.fields.nf_calories);
          return b.fields.nf_calories - a.fields.nf_calories
        })
      } else if (
        property === "nf_calories" &&
        this.state.sorted !== "nf_calories"
      ) {
        data.sort((a,b)=>{
          console.log(a.fields.nf_calories);
          return a.fields.nf_calories - b.fields.nf_calories
        })
      } else {
        data.sort(compare);
      }
    }

    return data.map(hit => {
      return (
        <ResultsContext.Consumer>
          {context => {
            const field = hit.fields;
            return (
              <tr onClick={() => context.select(hit.id)} key={hit.id}>
                <td>{field.item_name}</td>
                <td>{field.brand_name}</td>
                <td>{field.nf_calories}</td>
              </tr>
            );
          }}
        </ResultsContext.Consumer>
      );
    });
  }

  setSortedState(method) {
    if (this.state.sorted !== method) {
      return this.setState({
        sorted: method
      });
    } else {
      return this.setState({
        sorted: "reverse"
      });
    }
  }

  render() {
    return (
      <div className="results">
        <table>
          <tbody>
            <tr className="thead">
              <th
                onClick={() => {
                  this.props.sort("item_name");
                  this.setSortedState("item_name");
                }}
              >
                Food
              </th>
              <th
                onClick={() => {
                  this.props.sort("brand_name");
                  this.setSortedState("brand_name");
                }}
              >
                Brand
              </th>
              <th
                onClick={() => {
                  this.props.sort("nf_calories");
                  this.setSortedState("nf_calories");
                }}
              >
                Calories
              </th>
            </tr>
          </tbody>
          <tbody id="tbody">{this.renderResults(this.props.results)}</tbody>
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sort: method => dispatch(sort(method))
  };
};

const mapStateToProps = state => {
  return {
    results: state.results,
    sortMethod: state.sort
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
