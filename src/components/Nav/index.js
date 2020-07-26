import React, { useState } from 'react';
// import React, { useState } from 'react';
// //import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';
// //import 'bootstrap/dist/css/bootstrap.min.css';


function Nav() {

  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
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
    <header>
      {/* refer the module if you wish to add an icon later */}
      <nav>
        <ul className='flex-row'></ul>
          <li className='mx-2'>
            <a href='#about'>
              About Me
            </a>
          </li>
          <li className='mx-2'>
            <a href='#portfolio'>
              Portfolio
            </a>
          </li>
          <li className='mx-2'>
            <a href='#contact'>
              Contact
            </a>
          </li>
          <li className='mx-2'>
            <a href='#resume'>
              Resume
            </a>
          </li>
      </nav>

      <div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        <div>
          {
            renderPage()
          }
        </div>
      </div>
  
    </header>
  );
}


export default Nav;

