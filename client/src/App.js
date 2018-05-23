import React, { Component } from "react";
import Results from "./components/Results";
import ResultsContext from "./config/Context";
import ResultsProvider from "./config/Provider";
import nutritionix from "./assets/poweredby_nutritionix_api.png";

class App extends Component {
  state = {
    term: ""
  };
  render() {
    return (
      <ResultsProvider>
        <div className="app">
          <div className="header">
            <h1>Nutrition Search</h1>
          </div>
          <div className="search-attr">
            <div className="search">
              <h3>Search for a food item:</h3>
              <input
                className="searchbar"
                type="text"
                placeholder="eg: tacos"
                autoComplete="false"
                onChange={e =>
                  this.setState({
                    term: e.target.value
                  })
                }
              />
              <ResultsContext.Consumer>
                {context => (
                  <button onClick={() => context.search(this.state.term)}>
                    Search
                  </button>
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
      </ResultsProvider>
    );
  }
}

export default App;
