import React from 'react';
import { UsersGridItem } from './UsersGridItem';
import { UsersListItem } from './UsersListItem';



const UsersContainer = (props) => {
    const { users } = props;

    const styles = {
        backgroundColor:'red'
    }

    const listItems = users.map((user, index) => {

        if (user.gender == 'female') {
            user.style = styles;
        }

        console.log('style', user.x);

        if (props.viewMode == 'GRID') {
            return <UsersGridItem key={index} user={user} />
        }
        else if (props.viewMode == 'LIST') {

            return <UsersListItem key={index} user={user} />
        }

    }
    );


    return (
        <div className="row">
            {listItems}
        </div>
    )
}



export { UsersContainer };