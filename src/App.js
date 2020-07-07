import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      loading: false,
      card: {}
    }
    this.handleClick = this.handleClick.bind(this);
  }

  // fetchCards = async() =>{
  //   const res = await axios.get('https://7uwcrtkx7a.execute-api.ap-northeast-1.amazonaws.com/getCard');
  //   const products = res.data;
  //   this.setState({
  //     loading: false,
  //     cardType: products.cardType
  //   })
  // }

  componentDidMount() {
    this.setState(
      { loading: true }
    )
    fetch("https://7uwcrtkx7a.execute-api.ap-northeast-1.amazonaws.com/getCard")
      .then(response => response.json())
      .then(data => {
        this.setState({
            loading: false, 
            card: data
          })
      })
  }

  handleClick(){
    fetch("https://7uwcrtkx7a.execute-api.ap-northeast-1.amazonaws.com/getCard")
      .then(response => response.json())
      .then(data => {
        this.setState({
            loading: false, 
            card: data
          })
      })
  }

  render(){
    const cardType = this.state.card.cardType;
    const cardSuit = this.state.card.cardSuit;
    const cardNumber = this.state.card.cardNumber;
    const text = this.state.loading ? "loading..." : "You just got" + " " + cardType + " " + cardSuit + " " + cardNumber + "!";
    return (
      <div>
        <h1>{text}</h1>
        <button onClick={this.handleClick}>Get Another!</button>
      </div>
    )
  }

}

export default App;
