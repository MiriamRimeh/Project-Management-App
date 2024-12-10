import React from 'react';
import { Link } from 'react-router-dom';
import '../style/NavBar.css';

function NavigationBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/clients">Clients</Link>
        </li>
        <li className="user-menu">
          <Link to="/user-profile">
            <i className="fa fa-user"></i> User
          </Link>
          <ul className="dropdown">
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <Link to="/login">Logout</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;