import React from 'react';

const CardsForGrid = (props) => {

    return (

        <div className="col s4">

            <div className="card" style={props.data.back}>
                <div className="card-image">
                    <img alt="" src={props.data.picture.medium} />
                    <span className="card-title">{props.data.name}</span>
                </div>
                <div className="card-content">
                    <p>{props.data.hideMail()}</p>
                    <p>{props.data.dob.getDate()}.{props.data.dob.getMonth() + 1}.{props.data.dob.getFullYear()}.</p>
                </div>

            </div>

        </div>

    )
}


export { CardsForGrid };