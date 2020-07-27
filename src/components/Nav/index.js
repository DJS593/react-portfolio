import React from 'react';


function Nav(props) {

  const pages = ['About Me', 'Portfolio', 'Contact', 'Resume'];
  
  return (
    <ul className='nav nav-tabs'>
      {pages.map(page => (
        <li className='nav-item' key={page}>
          <a
            href={'#' + page.toLowerCase()}
            onClick={() => props.handlePageChange(page)}
            className={
              props.currentPage === page ? 'nav-link active' : 'nav-link'
            }
          >
            {page}
          </a>
        </li>
      ))}
    </ul>
  );
}


export default Nav;

