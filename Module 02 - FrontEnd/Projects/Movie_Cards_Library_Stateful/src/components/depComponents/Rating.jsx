import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Rating extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="input-rate" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          id="input-rate"
          type="number"
          value={ value }
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Rating.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func,
};

Rating.defaultProps = {
  value: 0,
  handleChange: () => {},
};
