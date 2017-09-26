// @flow
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Layout extends Component {
  render(){
    return (
      <div>
        <nav className="app-navigation">
          <NavLink className='home' to='/'>Home</NavLink>
          <NavLink to='/zen'>Zen</NavLink>
          <NavLink to='/about'>About</NavLink>
        </nav>
        { this.props.children }
      </div>
    )
  }
}

export default Layout;