import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";




class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topScore: 0,
    clickedArray: []
  };

  shuffle = array => {

    var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = array[i];
      array[i] = array[j];
      array[j] = x;
    }
    return array;

  }
  renderCards = () => {
    let { friends } = this.state;
    friends = this.shuffle(friends);

    return friends.map(friend => (
      <FriendCard
        // removeFriend={this.removeFriend}
        handleClick={this.handleClick}
        id={friend.id}
        key={friend.id}
        name={friend.name}
        image={friend.image}
      />
    ))
  }
  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };


  handleClick = id => {
    let { clickedArray, score } = this.state;

    if (clickedArray.includes(id)) {
      console.log("it exists");
      this.setState({ score: 0 })
      this.setState({ clickedArray: [] });

      // this.checkTopScore(this.state.score);
    }
    else {
      console.log("it doesn't exist");
      clickedArray.push(id);
      score = score + 1;
      this.setState({ score });

      this.checkTopScore(score);
    }
    this.renderCards();
  };

  checkTopScore = score => {
    if (score >= this.state.topScore) {

      this.setState({ topScore: score });
    }
  };




  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        <p>{this.state.score}</p>
        <p>Top Score: {this.state.topScore}</p>

        {this.state.friends.map(friend => (
          <FriendCard
            // removeFriend={this.removeFriend}
            handleClick={this.handleClick}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}

      </Wrapper>
    );
  }
}

export default App;
