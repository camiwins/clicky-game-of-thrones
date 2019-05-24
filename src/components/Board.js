// *** REACT ****
import React, { Component } from 'react';

// *** CHARACTER ARRY ***
import charArray from "../charArray.json";

// *** COMPONENTS ****
import Wrapper from "./Wrapper";
import Header from "./Header";
import Navigation from "./Navigation";
import Character from "./Character";

// *** NOT USED ****
// import Score from "./Score";
// import Image from 'react-bootstrap/Image
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// *** CODE STARTS HERE ****
const shuffleArray = arr => (
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1])
);


export default class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      characters: shuffleArray(charArray)
    };

  }

  handleClick = (pizza) => () => {
    console.log('this is:', pizza.name);
    // **** NOT FINISHED ****
    // I need an if statement that schecks to see if the "clicked" state is false for that object and if it is, then set to true WHEN clicked and also add 1 to score. I didn't get time to finsh this part :( *sad* sorry archie, nick, taylor. I let you guys down! BUT THANKS FOR EVERYTHING
    this.setState((prevState) => ({
      score: prevState.score + 1,
      characters: shuffleArray(charArray)
    }));
  }

  render() {
    return (
      <Wrapper>
        <Navigation />
        <Header />
        <h1>Score {this.state.score}</h1>
        {this.state.characters.map(character => (
          <Character
            image={character.image}
            name={character.name}
            key={character.key}
            clicked={character.clicked}
            onClick={this.handleClick(character)}
          />
        ))}
      </Wrapper>
    )
  }
};

