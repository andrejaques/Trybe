import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return (
      <div className="movie-list">
        { movies.map((movie, key) => (
          <MovieCard movie={ movie } key={ `Movie Title ${key + 1}` } />
        )) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })),
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
