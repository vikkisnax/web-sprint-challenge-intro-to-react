// Write your Character component here

//me: so this will be the layout of the INFO that's INSIDE the each box (which could be another component, but I put it inside the App component -- which could've just been for an outline of the page -- .map in App.js then). display names and other character info with props. style in App, above the comp function


import React from "react";
// import App from "../App"
//import from reactstrap for styling... 
import { Card, CardText } from "reactstrap";
import styled from 'styled-components';


const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 2px solid green;
    // space inbetween boxes:
    margin: 10px; 
    height: 40px;
    width: 450px;
    `;

const Text = styled.p`
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    font-family: 'Noto Serif', serif;
    color: #032e1f;
    font-size: 18px;
    `;

const Date = styled(Text)`
    font-family: 'Aref Ruqaa Ink', serif;
    background: #6969;
    border-top-right-radius: 2px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 10px;
    letter-spacing: .2rem;
    color: pink;
    font-size:11px
`;

// const TitleStyle = styled.p`
//     color: #669;
//     font-weight:bold;
//     `;


export default function Character({characters}){
    return(
    <Box>
        {/* <Col xs="6" md="4" xl="3"> */}
        <Card
            style={{
                width: '40rem',
                padding: '.01rem'
            }}
            >
        {" "}
        <Text>
            <CardText>{characters.name}</CardText>
            <Date>{characters.birth_year}</Date>
        </Text>
        </Card>
        {/* </Col>  */}
  </Box>
)
};


