import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css';
import { NameContext } from "./App";
import { useContext } from "react";
import Form from "react-bootstrap/Form";

const NavBar = () => {
  const { username, setUsername } = useContext(NameContext);
  const [submittedUsername, setSubmittedUsername] = useState('');


  /**
   * The function `handleUsernameChange` is used to handle changes in the username input field.
   */
  const handleUsernameChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  /**
   * The submitFunc function prevents the default form submission behavior and sets the
   * submittedUsername state variable to the value of the username variable.
   */
  const submitFunc = (e) => {
    e.preventDefault();
    setSubmittedUsername(username);
  };

  return (
    <>
      <div>
        <Form id="username-form" onSubmit={submitFunc}>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="What's Your Name?"
            className='name-input'
            />
          <button id="userNameBtn" type="submit" onClick={submitFunc}><a id='submit-a-tag'>Submit</a></button>
        </Form>
      </div>
      <div>
        <div id='Nav-Id'>
          <button><Link to="/home">Home</Link></button>
          <button><Link to="/recipes">Recipes</Link></button>
          <button><Link to="/donations">Donations</Link></button>
            </div>
            {submittedUsername && <div><h2>{`Welcome Chef ${submittedUsername}!`}</h2></div>}
          </div>
    </>
  )
}

export default NavBar
