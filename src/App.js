
import React, { useState } from "react"
import './App.css';
import Card from "./Card"
import styled from "styled-components"
const Button = styled.button`
background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`

function App() {
  const [cards, setCards] = useState([
    {
      id: 'ajsldh',
      name: 'Osbaldo Hodkiewicz IV',
      title: 'CEO',
      avatar: 'https://cdn.fakercloud.com/avatars/her_ruu_128.jpg'
    },
    {
      id: 'iekdhr',
      name: 'Eldora Rice',
      title: 'designer',
      avatar: 'https://cdn.fakercloud.com/avatars/umurgdk_128.jpg'
    },
    {
      id: 'hslfhf',
      name: 'Kane Donnelly',
      title: 'Web Developer',
      avatar: 'https://cdn.fakercloud.com/avatars/mastermindesign_128.jpg'
    }
  ])
  const [showCard, setShowCard] = useState(true)

  const toggleShowCard = () => setShowCard(!showCard)
  const deleteCardHandler = (cardIndex) => {
    const cards_copy = [...cards]
    cards_copy.splice(cardIndex, 1)
    console.log("cards", cards)
    console.log("copay cards",cards_copy)
    setCards(cards_copy)
  }
  const changeNameHandler = (event,id) => {
     const cardIndex = cards.findIndex(card => card.id == id)
     const cards_copy = [...cards]
     cards_copy[cardIndex].name = event.target.value
     setCards(cards_copy)
    }

  const classes = ['button']
  if (cards.length < 3) classes.push("pink")
  if (cards.length < 2) classes.push('red text')

  const cardsMarkup = showCard &&
    (
      cards.map((card, index) => <Card 
        avatar={card.avatar}
        name={card.name}
        title={card.title}
        key={card.id}
        onDelete={() => deleteCardHandler(index)}
        onChangeName = {(event) => changeNameHandler(event, card.id) }
      />)
    )
   

  return (
    <div className="App">
      <Button length={cards.length}>Toggle</Button>
      <button className={classes.join(' ')} onClick={toggleShowCard}> Toggle show/hide</button>
      {cardsMarkup}
    </div>
  
  )
}

export default App;
