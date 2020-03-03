import React from 'react';
import '/Users/dpthynair/monsters-rolodex/src/component/card/card.styles.css';

export const Card = (props)=> (
    <div className = 'card-container'>
       <h1>{props.monster.name}</h1> 
       <h1>{props.monster.email}</h1>
    </div>
)
    
