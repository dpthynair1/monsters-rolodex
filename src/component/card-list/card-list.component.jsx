import React from 'react';

import '/Users/dpthynair/monsters-rolodex/src/component/card-list/card-list.styles.css';

import {Card} from '../card/card.component';

export const CardList = props => {
    console.log(props);
    return <div className = 'card-list'>  {props.Monster.map(monster => (
    <Card key={monster.id}monster = {monster}/>
    ))}

     </div>;
}; 