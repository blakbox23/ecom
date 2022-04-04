import React, { Component } from 'react'
import ProductD from '../assets/ProductD.png'
import './style.css'

export class CartItem extends Component {
  render() {
    return (
      <>
      <div className="cart-item flex">
          <div className="flex cart-item-desc">
              <p className="brand-name cart-brand">Apollo</p>
              <p className="brand-prod-name">Running Shorts</p>
              <p className="cart-price">$50.00</p>
              checkboxes
          </div>
          <div className="flex">
              <div className="flex cart-counter"> 
                <div className="counter-act">+</div>
                <p>1</p>
                <div className="counter-act">-</div>               
              </div>
              <div className="cart-image">
                  <img src={ProductD} alt="" />
              </div>
          </div>
      </div>

<div className="cart-item flex">
<div className="flex cart-item-desc">
    <p className="brand-name cart-brand">Apollo</p>
    <p className="brand-prod-name">Running Shorts</p>
    <p className="cart-price">$50.00</p>
    checkboxes
</div>
<div className="flex">
    <div className="flex cart-counter"> 
      <div className="counter-act">+</div>
      <p>2</p>
      <div className="counter-act">-</div>               
    </div>
    <div className="cart-image">
        <img src={ProductD} alt="" />
    </div>
</div>
</div>
</> 
    )
  }
}

export default CartItem