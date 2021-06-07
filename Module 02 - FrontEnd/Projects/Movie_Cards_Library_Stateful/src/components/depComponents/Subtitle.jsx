import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Subtitle extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="input-subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          id="input-subtitle"
          type="text"
          value={ value }
          data-testid="subtitle-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

Subtitle.defaultProps = {
  value: '',
  handleChange: () => {},
};
