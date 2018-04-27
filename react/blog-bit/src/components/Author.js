import React from 'react';
import { Link } from 'react-router-dom';
import { SinglePostPage } from './SinglePostPage';

const Author = (props) => {
  return (
    <div className="row">
      <div className="col s12 m12">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text center">

            <h1 className="card-title ">{props.name}</h1>

            <p></p>

          </div>
          <hr />

        </div>
      </div>
    </div>
  )
}

export { Author }