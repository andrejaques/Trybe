import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import './styles/App.css';

import Form from './components/Form/Form';
import Table from './components/Table/Table';

function App() {
  return (
    <StarWarsProvider>
      <Form />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
