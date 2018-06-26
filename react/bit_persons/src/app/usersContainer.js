import React from 'react';

import { GridCards } from './gridCards';
import { ListCards } from './listCards';
import { Search } from './search';

const UsersContainer = (props) => {


    let redBackgroundColor = {
        redBackgroundColor: 'red'
    }



    if (props.view === "list") {
        console.log(props.persons);

        return <div>
            <Search persons={props.persons} input={props.input}/>
            <ListCards persons={props.persons} />
        </div>
    } else {

        return <div>
            <Search persons={props.persons} input={props.input}/>
            <GridCards persons={props.persons} />
        </div>
    }

}

export { UsersContainer };

