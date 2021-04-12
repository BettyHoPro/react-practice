import React from 'react'


const card = props => {
  console.log(props)
  return (
    <div>
      <div className="card">
        <img src={props.avatar} alt="Avatar" style={{width:'100%'}} />
        <div className="container">
          <h4><b>{props.name}</b></h4> 
          <p>{props.title}</p> 
         <input type="text" onChange={props.onChangeName} value={props.name}/>
          <p><button className="button button-red" onClick={props.onDelete} >Delete</button></p>
          <div>{props.children}</div> 
        </div>
      </div>
    </div>
  )
}

export default card

