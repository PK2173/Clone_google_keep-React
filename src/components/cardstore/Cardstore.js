import React, { useState } from 'react'
import './cardstore.css'
import Card from '../card/Card';

function Cardstore() {
    const [title, settitle] = useState("");
    const [containt, setcontaint] = useState('');
    const [listofcard, setlistofcard] = useState([])
    const addlist = (valuOf)=>{
        if (valuOf === 'ince') {
            setlistofcard([...listofcard,{title,containt}]);
        settitle('');
        setcontaint('');
        } else {
            setlistofcard(listofcard.filter((elem,index)=>{
                return index !== valuOf
            }))
        }
    }
  return (
    <div className='cardstore'>
        <div className="inptcontainer">
        <div className="maininput">
            <div className="title">
                <h2><input type="text" placeholder='Title' onChange={(e)=>{settitle(e.target.value)}} value={title}/></h2>
            </div>
            <div className="writenote">
            <textarea placeholder='Write a note...' cols="30" rows="10" onChange={(e)=>{setcontaint(e.target.value)}} value={containt} ></textarea>
            </div>
            <button onClick={()=>{addlist('ince')}}>➕</button>
        </div>
        </div>
        <div className="cards">
        {listofcard.map((elem,index)=>{
            return<Card key={index} {...elem} id={index} onSelect={addlist}/>
        })}
        
        </div>
    </div>
  )
}

export default Cardstore