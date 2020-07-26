// import React from 'react';

// //import 'bootstrap/dist/css/bootstrap.min.css';


// function Header() {
//   const [currentPage, handlePageChange] = useState('About');

//   const renderPage = () => {
//     switch(currentPage) {
//       case 'About':
//         return (<About></About>)

//       case 'Portfolio':
//         return (<Projects></Projects>)

//       case 'Contact':
//         return (<Contact></Contact>)

//       case 'Resume':
//         return (<Resume></Resume>)

//       default:
//         return (<About></About>)
//     }
//   };


//   return (
//     <div>
//       <Navigation currentPage={currentPage} 
//       handlePageChange={handlePageChange} />
//       <div>
//         {
//           renderPage()
//         }
//       </div>
//     </div>
//   );
// }

// export default Header;