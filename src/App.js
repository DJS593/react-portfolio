import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <section>
      <div>
        <Header></Header>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </section>
  );
}

export default App;
