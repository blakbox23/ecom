import React, { Component } from 'react'
import CartItem from './CartItem'
import './style.css'

export class Cart extends Component {
  render() {
    return (
      <div className="cart">
          <p id="cart-header">CART</p>
          <CartItem />
      </div>
    )
  }
}

export default Cart