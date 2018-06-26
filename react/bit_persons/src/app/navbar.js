import React from 'react';

const Navbar = (props) => {
  const viewMode = props.data === "list" ? "view_module" : "format_list_bulleted";
  // const toggleIcon = props.viewMode == 'GRID' ? listIcon : gridIcon;

  return (
    <div>
      <nav>
        <div className="nav-wrapper container">

          <span className="brand-logo center">Bit Persons</span>
          <ul className="right hide-on-med-and-down">
            
            <li onClick={props.refresh}><a><i className="material-icons">refresh</i></a></li>
            <li onClick={props.changeViewMode()}><a><i className="material-icons">{viewMode}</i></a></li>
          </ul>

        </div>
      </nav>

    </div>
  )
}

export { Navbar }