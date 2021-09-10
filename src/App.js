import React, { useState, useEffect } from "react";
import Characters from './components/Characters';
import { BASE_URL } from './constants'
import axios from "axios";
// import styled from "styled-components";
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

    const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then(res => {
        setCharacters(res.data)
      })
      .catch(err => console.log('Appjs: ', err))
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Characters characters={characters} />
    </div>
  );
}

export default App;
