import React from 'react';

function NavBar()  {

    const navStyle = {
        display: 'flex',
        flexDirection: 'row',
        width: '95vw',
        justifyContent: 'space-evenly',

        background: 'lightblue',
        height: '10vh',
        alignItems: 'center',

        listStyleType: 'none',
        borderRadius: '.5rem'
    }

    return (  
        <ul style={navStyle}>
            <li><a href="'#'">Home</a></li>
            <li><a href="'#'">Courses</a></li>
            <li><a href="'#'">Profiles</a></li>
            <li><a href="'#'">Contact Us</a></li>
        </ul>
    );
}
     
export default NavBar;