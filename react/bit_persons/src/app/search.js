import React from 'react';


const Search = (props) => {
    // const moja = (e) => {
    //     props.input(e.target.value);
    // }
    return (
        <nav>
            <div className="nav-wrapper container">
                <form>
                    <div className="input-field">
                        <input id="search" onKeyUp={e => props.input(e.target.value)} />
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    )
}

export { Search }