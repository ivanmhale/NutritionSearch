import React, { Component } from "react";
import ResultsContext from "../config/Context";

export default class Results extends Component {
  renderResults() {
    return (
      <ResultsContext.Consumer>
        {context => {

          if (!context.results) {
            return;
          }

          return context.results.hits.map(hit => {
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
            <tr>
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
