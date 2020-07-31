import React from 'react';
import Header from './header/header'
import Footer from './footer/footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div class="dashboard">
        <h1>Simple_31-07-2020 React App served by NGINX and Docker</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
