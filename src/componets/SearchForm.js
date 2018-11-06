import React, { Component } from 'react';
import OMDB_CONFIG from '../config/omdb';

export class SearchForm extends Component {
  state = {
    inputMovie: '',
  }

  _handleChange = (e) => {
    this.setState({ inputMovie: e.target.value })
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    const { inputMovie } = this.state;
    fetch(`http://www.omdbapi.com/?apikey=${OMDB_CONFIG.API_KEY}&s=${inputMovie}`)
      .then((response) => response.json())
      .then((results) => {
        const { Search = [], totalResults = "0" } = results;
        this.props.onResults(Search);
      });
  }

  render () {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Type a movie"
              onChange={this._handleChange}
            />
          </div>
          <div className="control">
            <button className="button is-info">
              Search
            </button>
          </div>
        </div>
      </form>
    );
  };
};
