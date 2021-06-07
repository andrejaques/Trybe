import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    if (name === 'bookmarkedOnly') {
      this.setState({ [name]: target.checked });
    } else {
      this.setState({ [name]: value });
    }
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    let filteredMovies = movies;

    if (bookmarkedOnly) {
      filteredMovies = filteredMovies.filter((m) => m.bookmarked);
    }

    if (selectedGenre) {
      filteredMovies = filteredMovies.filter((m) => m.genre === selectedGenre);
    }

    if (searchText) {
      filteredMovies = filteredMovies.filter((m) => m.title
        .toLowerCase().includes(searchText.toLowerCase())
        || m.subtitle.toLowerCase().includes(searchText.toLowerCase())
        || m.storyline.toLowerCase().includes(searchText.toLowerCase()));
    }

    return filteredMovies;
  }

  addMovie(newMovie) {
    this.setState((previousState) => ({
      movies: [...previousState.movies, newMovie],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div className="movie-library">
        <h2> My awesome movie library </h2>

        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />

        <MovieList movies={ this.filterMovies() } />

        <AddMovie onClick={ (newMovie) => this.addMovie(newMovie) } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ),
};

MovieLibrary.defaultProps = {
  movies: [{}],
};
