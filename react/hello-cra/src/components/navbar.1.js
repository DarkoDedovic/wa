import React from 'react';

const Navbar = (props) => {

    const listIcon = "format_list_bulleted";
    const gridIcon = "view_module";

    const toggleIcon = props.viewMode == 'GRID' ? listIcon : gridIcon;

    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">React Users</a>

                <ul className="right hide-on-med-and-down">
                    <li onClick={props.refresh()} ><a><i className="material-icons">refresh</i></a></li>
                    <li onClick={props.toggleVM()} ><a><i className="material-icons">{toggleIcon}</i></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;