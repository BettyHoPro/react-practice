
import React, { useState } from "react"
import './App.css';
import Card from "./Card"
import faker from "faker"

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

  const buttonStyle = {
    backgroundColor: null
  }
  if (cards.length < 3) buttonStyle.backgroundColor = 'lightpink';
  if (cards.length < 2) buttonStyle.backgroundColor = 'red';

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
      <button className="button" style={buttonStyle} onClick={toggleShowCard}> Toggle show/hide</button>
      {cardsMarkup}
    </div>
  
  )
}

export default App;
