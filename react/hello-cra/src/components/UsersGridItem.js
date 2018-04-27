import React from 'react';

 const UsersGridItem = (props) => {
    const { user } = props;
    const { name, email, dob, picture } = user;
    const { title, first, last } = name;

    return (
        /** objasniti samom sebi zasto ne moze da se ostavi dodeljivanje styla u userscontaineru */
        <div className="col s4" >   
            <div className="card" style={user.x}>
                <div className="card-image">
                    <img src={picture.medium} />
                    <span className="card-title">`{title} {first} {last}`</span>
                </div>
                <div className="card-content">
                    <p>{email}</p>
                    <p>`Date of birth:{dob}`</p>

                </div>
                <div className="card-action">
                    <a href="#"></a>
                </div>
            </div>
        </div>
    )
}

export {UsersGridItem}