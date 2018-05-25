import React, { Component } from "react";
import ResultsContext from "../config/Context";

export default class Results extends Component {
  sortAlphabetically(list, sortType) {
    var method;
    switch (sortType) {
      case "name":
        method = "item_name";
        break;
      case "brand":
        method = "brand_name";
        break;
      default:
        break;
    }
    list.sort((a, b) => {
      var nameA = a.fields[method].toLowerCase(),
        nameB = b.fields[method].toLowerCase();
      if (nameA < nameB)
        //sort string ascending
        return -1;
      if (nameA > nameB) return 1;
      return 0; //default return value (no sorting)
    });
  }

  renderResults() {
    return (
      <ResultsContext.Consumer>
        {context => {
          const list = context.results.hits;

          console.log(list);

          switch (context.sort) {
            case "name":
              this.sortAlphabetically(list, context.sort);
              break;
            case "brand":
              this.sortAlphabetically(list, context.sort);
              break;
            case "calories":
              list.sort(function(a, b) {
                return a.fields.nf_calories - b.fields.nf_calories;
              });
              break;
            default:
              break;
          }

          return list.map(hit => {
            var fields = hit.fields;
            var id = fields.item_id;
            return (
              <tr key={fields.item_id} onClick={() => context.select(id)}>
                <td>{fields.item_name}</td>
                <td>{fields.brand_name}</td>
                <td>{fields.nf_calories}</td>
              </tr>
            );
          });
        }}
      </ResultsContext.Consumer>
    );
  }

  render() {
    return (
      <div className="results">
        <table>
          <tbody>
                <tr className="thead">
                  <th>Food</th>
                  <th>Brand</th>
                  <th>Calories</th>
                </tr>
            {this.renderResults()}
          </tbody>
        </table>
      </div>
    );
  }
}
