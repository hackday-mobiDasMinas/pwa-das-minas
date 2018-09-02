import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import '../App.css';

export const NavBar = () => (
  <div className="navbar">
    <Link to="/">Dashboard</Link>
    <Link to="/profile">Minha Rota</Link>
  </div>
);