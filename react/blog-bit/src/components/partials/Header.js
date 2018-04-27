import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
        <div>
          <a href="" className="brand-logo">RND BLG</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          
            <li><Link to='/posts'>Home</Link></li>
            <li><Link to='/authors'>Authors</Link></li>
            <li><Link to='/aboutPage'>About</Link></li>
          </ul>
        </div>
      </nav>
    )
}

export { Header }