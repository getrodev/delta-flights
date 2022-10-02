import React from 'react';
import Header from '../Header/Header';
import FlightsList from '../Flights/FlightsList';
import Instructions from '../Instructions/Instructions';
import Footer from '../Footer/Footer'

import './App.css';

function App() {
  
  return (
   <React.Fragment>
      <Header />
      <Instructions />
      <main>
        <FlightsList/>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;




