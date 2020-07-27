import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import 'bootstrap/dist/css/bootstrap.min.css';


function Contact() {
  // set state to empty values
  const [formState, setFormState] = useState({ name: '', email: '', message: ''});
  // deconstruct formState
  const { name, email, message } = formState;
  // error message
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    
    //setFormState({...formState, [e.target.name]: e.target.value})
    
    // validate the email
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
        // isValid conditional statement
        if(!isValid) {
          setErrorMessage('Email is invalid!');
        } else {
          setErrorMessage('');
        }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required!`)
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  
  // form submission
  function handleSubmit(e) {
    e.preventDefault();
    // add more code
    console.log(formState);
  }
  
  
  return (
    <section>
      <h1 className='contact-container'>Contact Me</h1>
      <form id="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
        </div> 
          {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
          )}
        <button data-testid='button' type="submit" onSubmit={handleSubmit}>Submit</button>
      </form>
    </section>
  );
}

export default Contact;