import React, { Component } from 'react';
import { Title } from './componets/Title';
import { SearchForm } from './componets/SearchForm';

import './App.css';
import 'bulma/css/bulma.css';
import { MovieList } from './componets/MovieList';

class App extends Component {
  state = {
    results: [],
    usedSearch: false,
  }

  _handleResults = (results) => {
    this.setState({
      results,
      usedSearch: true,
    })
  }

  _renderResults () {
    return this.state.results.length === 0
      ? <p>Sorry, but we have not found any results! 😥</p>
      : <MovieList movies={this.state.results} />
  }

  render() {
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.usedSearch
          ? this._renderResults()
          : <small>Has not done any search yet.</small>
        }
      </div>
    );
  }
}

export default App;
