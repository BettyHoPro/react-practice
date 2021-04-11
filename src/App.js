
import React, { useState } from "react"
import './App.css';
import Card from "./Card"
import faker from "faker"

function App() {
  const [cards, setCards] = useState([
    {
      name: 'Osbaldo Hodkiewicz IV',
      title: 'CEO',
      avatar: 'https://cdn.fakercloud.com/avatars/her_ruu_128.jpg'
    },
    {
      name: 'Eldora Rice',
      title: 'designer',
      avatar: 'https://cdn.fakercloud.com/avatars/umurgdk_128.jpg'
    },
    {
      name: 'Kane Donnelly',
      title: 'Web Developer',
      avatar: 'https://cdn.fakercloud.com/avatars/mastermindesign_128.jpg'
    }
  ])
  const [showCard, setShowCard] = useState(true)

  const toggleShowCard = () => setShowCard(!showCard)
  const cardsMarkup = showCard &&
    (
      cards.map(card => <Card 
        avatar={card.avatar}
        name={card.name}
        title={card.title}
      />)
    )
   

  return (
    <div className="App">
      <button className="button" onClick={toggleShowCard}> Toggle show/hide</button>
      {cardsMarkup}
    </div>
  
  )
}

export default App;
