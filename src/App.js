import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import About from './components/About';
import Nav from './components/Nav';
//import Header from './components/Header';
//import Footer from './components/Footer';

//import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
