import React from 'react';

export default function Toggle({ handleToggler }) {
  return (
    <div
      className="navbar-menu"
      onClick={() => {
        console.log('clicked');
        handleToggler();
      }}
    >
      <div className="navbar-menu--bar"></div>
      <div className="navbar-menu--bar"></div>
      <div className="navbar-menu--bar"></div>
    </div>
  );
}
