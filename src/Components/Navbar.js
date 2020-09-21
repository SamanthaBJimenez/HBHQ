import React from 'react';
import { Link, Element, animateScroll as scroller } from 'react-scroll';

const Navbar = () => {
    return (
        <nav class="nav fixed-top navbar navbar-expand-lg">
            <ul class="navbar-nav">
                <li class="nav-link"><Link to='about'  activeClass='active-nav' spy={true} smooth={true} duration={500}>About</Link></li>
                <li class="nav-link"><Link to='podcast'  activeClass='active-nav' spy={true} smooth={true} duration={500}>Podcast</Link></li>
                <li class="nav-link"><Link to='youtube'  activeClass='active-nav' spy={true} smooth={true} duration={500}>Youtube</Link></li>
                <li class="nav-link"><Link to='contact'  activeClass='active-nav' spy={true} smooth={true} duration={500}>Contact</Link></li>
            </ul>
        </nav>
    )
}


export default Navbar;