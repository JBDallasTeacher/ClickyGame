import React, { Component } from "react";
import PictureCards from "./components/PictureCards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
//import friends from "./friends.json";
import PicCards from "./PicCards.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    PicCards,
    score: 0,
    highScore: 0
  };

  gameOver = () => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    if (this.state.score > this.state.highscore) {
      this.setState({ highScore: this.state.score }, function () {
        console.log("high score ",this.state.highScore);
      });
    }

    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({ score: 0 });
    this.state.PicCards.forEach(card => {
      card.count = 0;
    });
    return true;
  }

  clickCount = id => {
    
    // eslint-disable-next-line
    this.state.PicCards.find((o, i) => {
      if (o.id === id) {
        if (PicCards[i].count === 0) {
          PicCards[i].count = PicCards[i].count + 1;
          this.setState({ score: this.state.score + 1 },{highScore: this.state.highScore + 1}, function () {
            console.log("score in progress ",this.state.score);
          });
          this.state.PicCards.sort(() => Math.random() - 0.5)
          return true;
        } else {
          alert(PicCards[i].count);
          this.gameOver();
        }
      }
    });
  }

// Map over this.state.friends and render a FriendCard component for each friend object
render() {
  return (
    <Wrapper>
      <Title score={this.state.score} highscore={this.state.highScore}>Clicky Game</Title>
      {this.state.PicCards.map(card => (
        <PictureCards
          clickCount={this.clickCount}
          id={card.id}
          key={card.id}
          image={card.image}
        />
      ))}
    </Wrapper>
  );
}
}

export default App;
