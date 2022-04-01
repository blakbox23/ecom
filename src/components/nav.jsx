import React, { Component } from 'react'
import './style.css';
import logo from '../assets/logo.png'
import cart from '../assets/shopping-cart.png'


export class Nav extends Component {
  render() {
    return (
      <div className="nav flex">
          <div className="links flex">
            <p>WOMEN</p>
            <p>MEN</p>
            <p>KIDS</p>
          </div>
          <div className="logo">
              <img src={logo} alt="Logo" />
          </div>

          <div className="nav-right flex">
              <div> $</div>
              <div className="shopping-cart"><img src={cart} alt="" /></div>
          </div>
    
      </div>
    )
  }
}

export default Nav