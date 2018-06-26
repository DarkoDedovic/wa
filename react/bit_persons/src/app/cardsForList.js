import React from 'react';

const CardsForList = (props) => {
  return (

    <div className="col s4 m7 container">

      <div style={props.data.back} className="card horizontal">

        <img alt="" className="circle" src={props.data.picture.medium} />
        <span className="card-title">{props.data.name}</span>

        <div className="card-stacked">
          <div className="card-content">
            <p>{props.data.name} {props.data.surname}</p>
            <p><i className="material-icons">email</i> {props.data.hideMail()}</p>
            <p><i className="material-icons">cake</i>{props.data.dob.getDate()}.{props.data.dob.getMonth() + 1}.{props.data.dob.getFullYear()}.</p>
          </div>

        </div>
      </div>
    </div>

  )
}

export { CardsForList }