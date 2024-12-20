import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Toggle from './Toggle';
import Navlogo from './Navlogo';
export default function Navbar({ dispatch, states }) {
  const [timeLeft, setTimeLeft] = useState(600);
  const [timerRunning, setTimerRunning] = useState(true);
  const [toggleNavbar, setToggleNavbar] = useState(false);
  function handleToggler() {
    setToggleNavbar(prev => !prev);
    console.log(toggleNavbar);
  }
  useEffect(() => {
    if (states.endClass && timerRunning && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, timerRunning]);

  const formatTime = seconds => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? `0${secs}` : secs}`;
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Navlogo />
        <h3 className="nav-lesson">Trial Lesson [Grade 1-3]</h3>
        <h3 className="codingal-logo">Codingal</h3>
      </div>
      <div className={`nav-items ${toggleNavbar ? 'active' : ''}`}>
        <div className={`navbar-links`}>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/passengers">Passengers</Link>
        </div>
        <div className="navbar-timer">
          <h3 className="nav-timer">{formatTime(timeLeft)}</h3>
          <button
            className="btn btn-primary"
            onClick={() => {
              dispatch({ type: 'modalopen' });
            }}
          >
            End class
          </button>
        </div>
      </div>
      <Toggle handleToggler={handleToggler} />
    </nav>
  );
}
