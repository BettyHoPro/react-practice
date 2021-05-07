import React, { useState, useEffect } from 'react'
import './App.css';

const Card = props => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const recordMouse = e => {
        setX(e.clientX)
        setY(e.clientY)
    }
    console.log('mouse event')
    useEffect(() => {
      window.addEventListener('mousemove', recordMouse);

      return () => {
        console.log('Cardjs cleanup')
        window.removeEventListener('mousemove', recordMouse);
      }

    }, [])
    return (
        <div className="card">
            <p>x position : {x} </p><p> y position: {y} </p>
            <img src={props.avatar} alt="Avatar" style={{ width: '100%' }} />
            <div className="container">
                <h4><b>{props.name}</b></h4>
                <p>{props.title}</p>
                <input type="text" onChange={props.onChangeName} value={props.name} />
                <p><button className="button button-red" onClick={props.onDelete}>Delete</button></p>
                <div>{props.children}</div>
            </div>
        </div>
    )
}

export default Card
