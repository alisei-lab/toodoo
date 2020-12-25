import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <header>
      <h1>Toodoo app</h1>
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/about">About</Link>
    </header>
  )
}

export default Header
