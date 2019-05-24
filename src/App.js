import React, { Component } from "react";
import Board from "./components/Board";
import Wrapper from "./components/Wrapper";


class App extends Component {
  
  render() {
    return (
      <Wrapper>
        <Board/>
      </Wrapper>
    );
  }
}
export default App;
