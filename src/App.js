// remember, App component is usually for the outline of the page. but i'll combine App and another comp that I could make, here.

import axios from 'axios';
import { response } from 'msw'; //they did this for me i believe once I wrote get request. did i use response??
import React, { useState, useEffect } from 'react';
import Character from './components/Character';
import styled from 'styled-components';

//would usually go in another component that dealt with each BOX. might need to use column here...
// import { Container, Row } from "reactstrap"; 


//me: STYLES here -- basically for the BOXES
const Header = styled.h1`
  text-align: center;
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff
  `;

const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 25px
`



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
    <div className="AppContainer">
      <Header>Characters</Header>

      {/* just put MAP through each character's box here. pass in characters state to give data to Characters component. would usally map through each BOX in another comp, but ig i'll combine it here in the App comp. -- update: after .map and before i made anymore edits to Character comp (I returned 'hello'), hello showed 6x on the page = good bc length of the obj is 6 */}
      <BoxContainer> 
       {characters.map((characters) => {
          return <Character characters={characters} key={characters.url} />;
        })}
      </BoxContainer>
    </div>
  );
}

export default App;
