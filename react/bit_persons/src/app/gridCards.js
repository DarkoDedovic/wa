// import React from 'react';
import React, { Component } from 'react';

import { CardsForGrid } from './cardsForGrid';


const GridCards = (props) => {

    let redBackgroundColor = {
        backgroundColor: '#F08080'
    }

    const personsList = props.persons.map((user, index) => {
        if (user.gender === 'female') {
            user.back = redBackgroundColor;
        }
        return <CardsForGrid data={user} key={index} />
    })

    return (
        <div className="container row">

            {personsList}

        </div>
    )

}

export { GridCards }



