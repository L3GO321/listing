import React from 'react';
import { Listing } from './components/Listing/Listing';
import './App.css';
import { data } from './components/utils/data';

function App() {
  return (
    <Listing items={data} />
  );
}

export default App;
