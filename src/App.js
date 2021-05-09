import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Card from './Card';
import { ThemeProvider } from 'styled-components'
import Button from './element/Button'

const theme = {
  primary: '#4CAF50',
  mango: 'yellow'
}

function App() {
  const [cards, setCards] = useState([])
  const [showCard, setShowCard] = useState(true)

  //fetch the data
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      console.log(res.data)
      setCards(res.data)
    })
  }, [])

  const toggleShowCard = () => setShowCard(!showCard)
  const deleteCardHandler = (cardIndex) => {
    const cards_copy = [...cards]
    cards_copy.splice(cardIndex, 1)
    console.log('cards_copy', cards_copy)
    console.log('cards', cards)
    setCards(cards_copy)

  }
  const changeNameHandler = (event, id) => {
    //1. which card
    const cardIndex = cards.findIndex(card => card.id === id)
    //2. make a copy of the cards
    const cards_copy = [...cards]
    //3. change the name of the specific card
    cards_copy[cardIndex].name = event.target.value
    //4. set the cards with the latest version of card copy
    setCards(cards_copy)
  }
  // const buttonStyle = {
  //   backgroundColor: null
  // }
  const classes = ['button']
  if (cards.length < 3) classes.push('pink')
  if (cards.length < 2) classes.push('red text');
  const cardsMarkup = showCard && (
    cards.map((card, index) => <Card
      avatar={card.avatar}
      name={card.name}
      phone={card.phone}
      key={card.id}
      onDelete={() => deleteCardHandler(index)}
      onChangeName={(event) => changeNameHandler(event, card.id)}
    />)
  )

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button color="mango" length={cards.length}>Toggle</Button>
        <button className={classes.join(' ')} onClick={toggleShowCard}>Toggle show/hide</button>
        {cardsMarkup}
      </div>
    </ThemeProvider>
  );
}

export default App;
