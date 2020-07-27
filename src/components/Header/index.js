import React, {useState} from 'react';
import Nav from '../Nav';
import About from '../About';
import Contact from '../Contact';
import Resume from '../Resume';
import Projects from '../Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

// MAYBE CHANGE THIS TO A MORE INTUITIVE NAME
function Portfolio() {
  // current state   
  const [currentPage, handlePageChange] = useState('About');

   const renderPage = () => {
    // switch allows for chosen component to be shown
    switch(currentPage) {
      case 'About':
        return (<About></About>)

      case 'Portfolio':
        return (<Projects></Projects>)

      case 'Contact':
        return (<Contact></Contact>)

      case 'Resume':
        return (<Resume></Resume>)

      default:
        return (<About></About>)
    }
  };


  return (
    <div>
      <Nav currentPage={currentPage} 
      handlePageChange={handlePageChange} />
      <div>
        {
          renderPage()
        }
      </div>
    </div>
  );
}

export default Portfolio;