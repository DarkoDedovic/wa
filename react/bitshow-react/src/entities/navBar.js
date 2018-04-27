import React from 'react';



const Navbar = () => {

    return (
        <header className="container" >

            <nav className="navbar navbar-light bg-dark justify-content-between row">
                <div className="logo">
                    <a href="">
                        <span>
                            <img src="http://images.bgit.rs/logo.png" alt="BIT" />
                        </span>
                        <img src="http://images.bgit.rs/logo-tag.png" alt="Institute of Technology Belgrade" />
                    </a>
                </div>
                <form className="form-inline">

                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
            </nav>
        </header>

    )

}
            
export {Navbar} ; 