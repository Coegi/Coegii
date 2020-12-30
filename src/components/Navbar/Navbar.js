import React, { useState } from 'react';
import './Navbar.css';

import img from '../Navbar/png.png';

import { Link } from "react-scroll";


function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav >
            <div className="logo">
                <img src={img} alt='logo' style={{ width: '100px' }} />

            </div>
            <ul className="nav-links" style={{ transform: open ? "translateX(0px)" : "" }}>
                <Link
                    activeClass="active"
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={400}
                >Home</Link>
                <Link
                    activeClass="active"
                    to="OurService"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={400}
                >OurService</Link>
                <Link
                    activeClass="active"
                    to="Faq"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={400}
                >Faq</Link>
            </ul>
            <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>

        </nav>
    )
}

export default Navbar
