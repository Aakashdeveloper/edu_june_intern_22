import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return(
        <header>
            <div id="brand">
                Developer Funnel 
                &nbsp;  &nbsp; <Link className="btn btn-info" to="/">Home</Link>
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