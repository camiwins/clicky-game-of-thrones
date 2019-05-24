import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


function Header () {
    return <Jumbotron fluid>
    <Container>
      <h1>Clicky-Game</h1>
      <p>
        Click an image to earn points, but don't click more than once!
      </p>
    </Container>
  </Jumbotron>;
}

export default Header;