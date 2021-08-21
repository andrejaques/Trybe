import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Form from '../components/Form';
import { fetchAPI } from '../actions';
import Table from '../components/Table';

const Wallet = (props) => {
  const { fetchCurrency } = props;

  useEffect(() => {
    fetchCurrency();
  }, [fetchCurrency]);

  return (
    <div className="Wallet">
      <Header />
      <Form />
      <Table />
    </div>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  fetchCurrency: PropTypes.func.isRequired,
};
