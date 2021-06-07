import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="input-select" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="input-select"
          value={ value }
          data-testid="genre-input"
          onChange={ handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

Select.defaultProps = {
  value: '',
  handleChange: () => {},
};
