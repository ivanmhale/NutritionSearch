import React from "react";
import ResultsContext from "../config/Context";

const Modal = () => {
  return (
    <ResultsContext.Consumer>
      {context => {
        if (!context.selected) {
          return;
        }
        var item = context.selected;
        Object.keys(item).map(key => {
          if (item[key] == null) {
            item[key] = "N/A";
          }
        });
        return (
          <div className="modal">
            <div className="content">
              <span
                onClick={() => {
                  context.unselect();
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
};

export default Modal;
