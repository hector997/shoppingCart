import React, { Component } from 'react';


const NavBar = ({totalCounters}) => {
    return (  
        <nav id="nav" className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                SHOPPING CART 
                <span className="badge badge-pill badge-secondary ml-3">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
};
 
export default NavBar;