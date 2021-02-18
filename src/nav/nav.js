import React, { Component } from "react";
import "./nav.css";
import logo from "./logoimg/logo.png"
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="Nav">
            <span className="Nav_title"><img src= {logo} alt="Logo" /></span>
            <div className="Navi">
              <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}