import React, { Component } from "react";
import ResultsContext from "../config/Context";
import { FadeLoader } from "react-spinners";
import { connect } from "react-redux";
import { isLoading } from "../actions";

class Modal extends Component {
  render() {
    console.log(this.props.loading);
    return (
      <ResultsContext.Consumer>
        {context => {
          if (!context.selected && !this.props.loading) {
            return;
          } else if (!context.selected && this.props.loading) {
            return (
              <div id="modal" className="modal">
                <div className="content">
                  <FadeLoader color={"green"} loading={true} />
                </div>
              </div>
            );
          }
          var item = context.selected;
          Object.keys(item).map(key => {
            if (item[key] == null) {
              item[key] = "N/A";
            }
          });
          return (
            <div id="modal" className="modal">
              <div className="content">
                <span
                  onClick={() => {
                    context.unselect();
                    this.props.isLoading(false);
                  }}
                >
                  close
                </span>
                <h1>{item.item_name}</h1>
                <hr />
                <table>
                  <tbody>
                    <tr>
                      <td>Serving size</td>
                      <td>{item.nf_serving_size_unit}</td>
                    </tr>
                    <tr>
                      <td>Calories</td>
                      <td>{item.nf_calories}</td>
                    </tr>
                    <tr>
                      <td>Fats</td>
                      <td>{item.nf_total_fat}</td>
                    </tr>
                    <tr>
                      <td>Monounsaturated</td>
                      <td>{item.nf_monounsaturated_fat}</td>
                    </tr>
                    <tr>
                      <td>Saturated</td>
                      <td>{item.nf_saturated_fat}</td>
                    </tr>
                    <tr>
                      <td>Carbs</td>
                      <td>{item.nf_total_carbohydrate}</td>
                    </tr>
                    <tr>
                      <td>Sugars</td>
                      <td>{item.nf_sugars}</td>
                    </tr>
                    <tr>
                      <td>Protein</td>
                      <td>{item.nf_protein}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          );
        }}
      </ResultsContext.Consumer>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    isLoading: bool => dispatch(isLoading(bool))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
