import axios from 'axios';
import { response } from 'msw';
import React, { useState, useEffect } from 'react';

//me: styles here


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  const [characters, setCharacters] = useState("")

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


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
