import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Title extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="input-title" data-testid="title-input-label">
        Título
        <input
          name="title"
          id="input-title"
          type="text"
          value={ value }
          data-testid="title-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Title.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

Title.defaultProps = {
  value: '',
  handleChange: () => {},
};
