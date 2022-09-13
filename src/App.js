// remember, App component is usually for the outline of the page. but i'll combine App and another comp that I could make, here.

import axios from 'axios';
import { response } from 'msw'; //they did this for me i believe once I wrote get request. did i use response??
import React, { useState, useEffect } from 'react';
import Character from './components/Character';

//would usually go in another component that dealt with each BOX. might need to use column here...
import { Container, Row } from "reactstrap"; 


//me: STYLES here -- basically for the BOXES


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any. <-- *** THINK ABOUT HOW THIS WILL APPLY HERE ***


  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        setCharacters(response.data);
        // console.log(response);
        console.log(response.data);
      })
      .catch((error)=> {
        console.log("The data was not returned", error);
      });
  }, []);
  //consider if anything needs to go in the dependency array - pg40 in notes


  //basically the outline of the site
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>

      {/* just put MAP through each character's box here. pass in characters state to give data to Characters component. would usally map through each BOX in another comp, but ig i'll combine it here in the App comp*/}
      <div> 
       {characters.map((character) => {
          return <Character characters={characters} key={character.url} />;
        })}
      </div>
    </div>
  );
}

export default App;
