import React from 'react';
import {Nav, NavLink} from 'reactstrap';

export default class Example extends React.Component {
    render() {
        const { handleChagneLang, lang } = this.props;

        return (

            <Nav>
                <NavLink href="#" onClick={ () => handleChagneLang('th') } className={`${lang === "th" ? "disabled" : ""}`}>TH</NavLink>
                <NavLink href="#" onClick={ () => handleChagneLang('en') } className={`${lang === "en" ? "disabled" : ""}`}>EN</NavLink>
            </Nav>
        );
    }
}