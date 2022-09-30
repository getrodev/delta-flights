import React from 'react';
import Header from '../Header/Header';
import FlightsList from '../Flights/FlightsList';
import Instructions from '../Instructions/Instructions';

import './App.css';

function App() {
  
  return (
   <React.Fragment>
      <Header />
      <Instructions />
      <main>
        <FlightsList/>
      </main>
    </React.Fragment>
  );
}

export default App;




