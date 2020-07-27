import React from 'react';
import coverImage from '../../assets/cover/japanese-wave.jpg'


function About() {
  return(
  <section className="title">
    <h1 class="name">David Stahl</h1>
    
    <div className="row" id="about-container">
    <div className="img" id="img">
        <img src={coverImage} className="cover-img" alt="japanese-wave"/>
    </div>
    <div className="col-8">
    <h2 class="welcome">GET TO KNOW ME</h2>
    <p>
    Hapi is a dependency manager with identical input values of a JavaScript engines has made the language that encapsulates how a library to create and notifies them have also used for manipulating Linked Data. JSLint is said to one of websites. XML-like syntax extension to develop 3D. Broccoli is an interpreted programming similarly exploits this strength.
    <br></br>
    <br></br>
    Hapi is a dependency manager with identical input values of a JavaScript engines has made the language that encapsulates how a library to create and notifies them have also used for manipulating Linked Data. JSLint is said to one of websites. XML-like syntax extension to develop 3D. Broccoli is an interpreted programming similarly exploits this strength.
    </p>
    </div>  
    </div>
  </section> 

//<a href='https://www.freepik.com/free-photos-vectors/background'>Background vector created by rawpixel.com - www.freepik.com</a>

  )
}

export default About;