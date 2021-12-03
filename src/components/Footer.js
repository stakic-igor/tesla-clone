import React from 'react';
import styled from 'styled-components';

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <AppFooter>
            &copy; copyright {year}, All rights reserved.
        </AppFooter>
    )
}

// Style for footer

const AppFooter = styled.footer`
    background-color: rgb(23, 26, 32);
    color: rgb(255, 255, 255);
    font-size: .750rem;
    text-align: center;
    box-sizing: border-box;
    padding: .500rem 0;
`;


export default Footer;