import React, { Component } from "react";
import Results from "./Results";
import ResultsContext from "../config/Context";
import nutritionix from "../assets/poweredby_nutritionix_api.png";

export default class Main extends Component {
  state = {
    term: ""
  };

  render() {
    return (
      <div className="main">
        <div className="header">
          <h1>Nutrition Search</h1>
        </div>

        <div className="search-attr">
          <div className="search">
            <ResultsContext.Consumer>
              {context => (
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    context.search(this.state.term);
                  }}
                >
                  <input
                    className="searchbar"
                    type="text"
                    placeholder="Look up a food (eg: 'tacos')"
                    autoComplete="false"
                    onChange={e =>
                      this.setState({
                        term: e.target.value
                      })
                    }
                  />

                  <button
                    onClick={e => {
                      e.preventDefault();
                      context.search(this.state.term);
                    }}
                  >
                    Search
                  </button>
                </form>
              )}
            </ResultsContext.Consumer>
          </div>

          <div className="attribution">
            <a href="https://www.nutritionix.com/business/api">
              <img src={nutritionix} alt="Nutritionix Logo" />
            </a>
          </div>
        </div>
        <Results />
      </div>
    );
  }
}
