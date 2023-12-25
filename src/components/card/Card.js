import React from 'react'

export default function Card(props) {
    console.log(props.id);
  return (
    <div className="card">
            <h3 className="cardheading">{props.title}</h3>
            <p className="cardcontaint">{props.containt}</p>
            <button onClick={()=>{props.onSelect(props.id)}}>🗑</button>
        </div> 
  )
}