import React from 'react';

 const UsersListItem = (props) => {
    
    
    return (
        <ul className="collection">
        <li className="collection-item avatar" style={props.user.x}>
            <img src={props.user.picture.medium} alt="" className="circle"/>
            <span className="title">Title</span>

            <p>{props.user.name.title}</p>
            <p>{props.user.email}</p>
            <p>{props.user.dob}</p>
            
            
            <a href="#!" className="secondary-content"><i className="material-icons"></i></a>
        </li>
        </ul>
    )
}

export {UsersListItem};