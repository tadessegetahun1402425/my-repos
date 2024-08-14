import React from 'react';
import './Header.css';
function Header() {
  return (
    <div className="header">
      <div className="logo">Business Directory</div>
      <div className="nav-bar">
        <input type="text" placeholder="Search..." />
        <button >Find</button>
        <button onClick={() => window.location.href='/login'} >Login</button>
        <button onClick={() => window.location.href='/signup'}>Sign Up</button>
      </div>
    </div>
  );
}

export default Header;
