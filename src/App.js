import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Card from './Card';
import { ThemeProvider } from 'styled-components'

const theme = {
  primary: '#4CAF50',
  mango: 'yellow'
}

function App() {
  const [card, setCard] = useState([])
  const [id, setId] = useState(1)

  //fetch the data
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => {
      console.log(res.data)
      setCard(res.data)
    })
  }, [id]) //request one time

  // const toggleShowCard = () => setShowCard(!showCard)

  const changeNameHandler = (event, id) => {
    //1. make a copy of the cards
    const card_copy = {...card}
    //2. change the name of the specific card
    card_copy.name = event.target.value
    //4. set the cards with the latest version of card copy
    setCard(card_copy)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <input type="text" value={id} onChange={ e => setId(e.target.value)} />
      <Card
      avatar={card.avatar}
      name={card.name}
      phone={card.phone}
      key={card.id}
      onChangeName={(event) => changeNameHandler(event, card.id)}
    />
      </div>
    </ThemeProvider>
  );
}

export default App;
