import React from 'react';
import Link from 'next/link';
import './header.css';

const logopic = require('./logo.png')
const icon1 = require('./icon1.png')

const Header = ({ }) =>
    <div id="header">
        <Link href="/HomePage">
            <div id="headerlogo">
                <img id="logoimg" src={logopic} />
            </div>
        </Link>

        <Link href="/HomePage">
            <div className="headericons">
                <img src={icon1} />
            </div>
        </Link>
    </div>;



export default Header;

