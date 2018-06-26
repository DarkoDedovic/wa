import React, { Component } from 'react';

import { CardsForList } from './cardsForList';

const ListCards = (props) => {

    let redBackgroundColor = {
        backgroundColor: '#F08080'
    }

    const personsList = props.persons.map((user, index) => {
        if (user.gender === 'female') {
            user.back = redBackgroundColor;
        }
        return <CardsForList data={user} key={index}/>
    })

    return (
        <div>
            {personsList}
        </div>
    )
}



export { ListCards }
