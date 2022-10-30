import React from 'react';
import './Header.css'

const Header = (props) => {
    return(
        <header>
            <div id="brand">
                Developer Funnel
            </div>
            <div id="social">
                <button className="btn btn-success">
                    <span className="glyphicon glyphicon-log-in"></span> LogIn
                </button> &nbsp;
                <button className="btn btn-danger">
                    <span className="glyphicon glyphicon-user"></span> SignUp
                </button>
                
            </div>
        </header>
    )
}

export default Header;