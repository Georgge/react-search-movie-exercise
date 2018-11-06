import React, { Component } from 'react';
import PropTypes from 'prop-types';

import OMDB_CONGIG from '../config/omdb';

export class Detail extends Component {
  static propTypes = {
    id: PropTypes.string,
  }

  state = {
    movie: {}
  }

  _fetchMovie ({id}) {
    fetch(`http://www.omdbapi.com/?apikey=${OMDB_CONGIG.API_KEY}&i=${id}`)
      .then((response) => response.json())
      .then((movie) => {
        console.log(movie)
        this.setState({ movie })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  _goBack () {
    window.history.back();
  }

  componentDidMount () {
    const { id } = this.props;
    this._fetchMovie({ id });
  }

  render() {
    const {
      Title, Poster,
      Actors, Director,
      Metascore, Year,
      Plot, Writer,
    } = this.state.movie;
    return (
      <div>
        <button onClick={this._goBack}>Back</button>
        <h1>{Title}</h1>
        <img src={Poster} />
        <h4>{Year}</h4>
        <h3>{Actors}</h3>
        <h3>{Director || Writer}</h3>
        <span>{Metascore}</span>
        <p>{Plot}</p>
      </div>
    )
  }
}