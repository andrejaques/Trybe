import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { handleClick } = this.props;

    return (
      <button
        name="button"
        type="submit"
        data-testid="send-button"
        onClick={ handleClick }
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  handleClick: () => {},
};
