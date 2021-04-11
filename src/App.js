
import React, { useState } from "react"
import './App.css';
import Card from "./Card"
import faker from "faker"

function App() {
  const [ name, setName] = useState("Betty Ho")
  const [showCard, setShowCard] = useState(true)
  
  const changeNameHandler = (name) => setName(name)
  const changeInputHandler = event => setName(event.target.value)
  const toggleShowCard = () => setShowCard(!showCard)
  const btnsMarkup = (
    <div>
    <button className="button button2">Yes</button>
    <button className="button button3">No</button>
    </div>
  )
  const cardsMarkup = showCard &&
    <Card 
       avatar="https://cdn.fakercloud.com/avatars/antonyzotov_128.jpg"
       name={name}
       title="Future Group Executive"
       onChangeName={() => changeNameHandler("betty Ho")}
       onChangeInput={changeInputHandler}
     >{btnsMarkup}
     </Card>

  return (
    <div className="App">
      <button className="button" onClick={toggleShowCard}> Toggle show/hide</button>
      {cardsMarkup}
    </div>
  
  )
}

export default App;
