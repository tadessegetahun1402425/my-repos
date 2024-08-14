import React from 'react';
import './LeftSidebar.css';

function LeftSidebar() {
  return (
    <div className="left-sidebar">
      <a href="/home">Home</a>
      <a href="/advertising">Advertising</a>
      <a href="/write-a-review">Write a Review</a>
      <a href="/add-a-business">Add a Business</a>
      <a href="/services">Services</a>
    </div>
  );
}

export default LeftSidebar;
