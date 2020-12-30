import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Nav extends Component {
    render() {
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Ourservice">Ourservice</Link></li>
                <li><Link to="/Faq">Faq</Link></li>
                <li><Link to="/Faq">About</Link></li>
                <li className="close">x</li>
                <div className="menu">menu</div>
            </ul>
        )
    }
}
export default Nav;