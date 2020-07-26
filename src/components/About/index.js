import React from 'react';

// using the module 20 images for now; need to find images or use the module 3 images
import coverImage from '../../assets/cover/cover-image.jpg'


function About() {
  return (
    <section className='my-5'>
      <h1 id='about'>David Stahl</h1>
      <img src={coverImage} className='my-2' style={{ width: '100%' }} alt='cover' />
    </section>

  )
}

export default About;