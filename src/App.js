
import React, { useState } from "react"
import './App.css';
import Card from "./Card"
import faker from "faker"

function App() {
  const [ name, setName] = useState("Betty Ho")
  const [showCard, setShowCard] = useState(true)

  const toggleShowCard = () => setShowCard(!showCard)
  const cardsMarkup = showCard &&
    <Card 
       avatar="https://cdn.fakercloud.com/avatars/antonyzotov_128.jpg"
       name={name}
       title="Future Group Executive"
     >
     </Card>

  return (
    <div className="App">
      <button className="button" onClick={toggleShowCard}> Toggle show/hide</button>
      {cardsMarkup}
    </div>
  
  )
}

export default App;
