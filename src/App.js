
import React, { Component } from "react"
import './App.css';
import Card from "./Card"
import { ThemeProvider } from "styled-components"
import Button from './element/Button'
const theme = {
  primary: "#4CAF50",
  mango: "yellow" 
}

class App extends Component {
  constructor(props) {
    console.log('App js constructor');
    super(props)
    this.state = {
      cards:[
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
      ], 
      showCard: true
    }
  }
  // const [cards, setCards] = useState()
  // const [showCard, setShowCard] = useState(true)
  static getDerivedStateFromProps(props, state) {
    console.log('App js getDerivedStateFromProps', props);
    return state;
  }
  toggleShowCard = () => this.setState({showCard: !this.state.showCard})
  deleteCardHandler = (cardIndex) => {
    const cards_copy = [...this.state.cards]
    cards_copy.splice(cardIndex, 1)
    // console.log("cards", cards)
    // console.log("copay cards",cards_copy)
    this.setState({ cards: cards_copy })
  }
  changeNameHandler = (event,id) => {
     const cardIndex = this.state.cards.findIndex(card => card.id === id)
     const cards_copy = [...this.state.cards]
     cards_copy[cardIndex].name = event.target.value
     this.setState({cards: cards_copy})
    }

  componentDidMount(){
    console.log("App js componentDidMount");
  }

  render(){
    console.log("App js render");
    const classes = ['button']
    if (this.state.cards.length < 3) classes.push("pink")
    if (this.state.cards.length < 2) classes.push('red text')
  
    const cardsMarkup = this.state.showCard &&
      (
        this.state.cards.map((card, index) => <Card 
          avatar={card.avatar}
          name={card.name}
          title={card.title}
          key={card.id}
          onDelete={() => this.deleteCardHandler(index)}
          onChangeName = {(event) => this.changeNameHandler(event, card.id) }
        />)
      )
    
  return (
    <ThemeProvider theme={ theme}>
    <div className="App">
      <Button color= "mango" length={this.state.cards.length} onClick={this.toggleShowCard}>Toggle</Button>
      <button className={classes.join(' ')} onClick={this.toggleShowCard}> Toggle show/hide</button>
      {cardsMarkup}
    </div>
    </ThemeProvider>
  )
  }
}

export default App;
