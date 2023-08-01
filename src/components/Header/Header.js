import React from 'react'
import header_logo from '../../images/header_logo.png';
import './Header.scss';

const Header = (props) => {
    const backToUnfilteredList = () => {
        props.renderUnfilteredList();
    };

    return (
        <header className="header">
            <img src={header_logo} className="header__logo"
                alt="logo" onClick={backToUnfilteredList} />
        </header>
    );
};

export default Header;
