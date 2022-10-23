import React from 'react';

const Footer = (props) => {
    console.log(props)
    return(
        <>
            <hr/>
            <center>
                <h3>&copy; Developer Funnel {props.year} {props.month}</h3>
            </center>
            
        </>
    )
}

export default Footer;