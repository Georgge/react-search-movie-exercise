import React, { Component } from 'react';
import { Title } from './componets/Title';
import { SearchForm } from './componets/SearchForm';

import './App.css';
import 'bulma/css/bulma.css';
import { MovieList } from './componets/MovieList';

class App extends Component {
  state = { results: [] }

  _handleResults = (results) => {
    this.setState({ results })
  }

  render() {
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.results.length === 0
          ? <p>No results</p>
          : <MovieList movies={this.state.results} />
        }
      </div>
    );
  }
}

export default App;
