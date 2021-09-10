import React, { useState, useEffect } from "react";
import Characters from './components/Characters';
import { BASE_URL } from './constants'
import axios from "axios";
import styled from "styled-components";
import './App.css';


const StyledApps = styled.div`
  color: gray;
  font-size: 1.5rem;
  display: table;
	width: 100%;

  
  .divBody{
    display: table-row-group;
  }

  .divRow{
    display: table-row;
  }

  .divCell {
      border: 1px solid #999999;
	    display: table-cell;
	    padding: .5% 1rem;
    }
`


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
      <h1 className="Header">Characters Comparation</h1>
      <StyledApps>

        <div className='divBody'>
          <div className='divRow'>
            <div class="divCell">Name</div>
            <div class="divCell">Height</div>
            <div class="divCell">Mass</div>
            <div class="divCell">Hair Color</div>
            <div class="divCell">Skin Color</div>
            <div class="divCell">Eye Color</div>
            <div class="divCell">Birth Year</div>
            <div class="divCell">Gender</div>
          </div>
            <Characters characters={characters} />
        </div>
      </StyledApps>
    </div>

  );
}

export default App;
