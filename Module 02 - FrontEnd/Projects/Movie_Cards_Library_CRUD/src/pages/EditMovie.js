import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

export default class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: true,
      shouldRedirect: false,
      movie: {},
    };

    this.fetchAPI = this.fetchAPI.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  handleSubmit(updatedMovie) {
    this.setState(
      { status: true },
      async () => {
        const updateMovie = await movieAPI.updateMovie(updatedMovie);
        if (updateMovie === 'OK') {
          this.setState({
            status: false,
            shouldRedirect: true,
          });
        }
      },
    );
  }

  fetchAPI() {
    const { match: { params: { id } } } = this.props;
    this.setState(
      { status: true },
      async () => {
        const getMovie = await movieAPI.getMovie(id);
        this.setState({
          status: false,
          movie: getMovie,
        });
      },
    );
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status) {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
