import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Movie } from './Movie';

export class MovieList extends Component {
  static propTypes = {
    movies: PropTypes.array,
  };
  render() {
    const { movies } = this.props;
    return (
      <div className="movieList">
        {
          movies.map(movie => {
            return (
              <div key={movie.imdbID} className="movieList-item">
                <Movie
                  id={movie.imdbID}
                  key={movie.imdbID}
                  title={movie.Title}
                  year={movie.Year}
                  poster={movie.Poster}
                />
              </div>
            );
          })
        }
      </div>
    );
  }
};
