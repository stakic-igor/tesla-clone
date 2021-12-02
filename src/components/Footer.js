import React from 'react';

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            &copy; copyright {year}, All rights reserved.
        </footer>
    )
}

export default Footer;