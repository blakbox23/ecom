import React, { Component } from 'react'
import './style.css'
import ProductD from '../assets/ProductD.png'

export class MiniCartItem extends Component {
  render() {
    return (
      <div>
        <div className="mini-cart-item flex">
          <div className="flex cart-item-desc">
              <p className="mini-brand-name mini-cart-brand">Apollo</p>
              <p className="mini-brand-prod-name">Running Shorts</p>
              <p className="mini-cart-price">$50.00</p>
              checkboxes
          </div>
          <div className="flex">
              <div className="flex mini-cart-counter"> 
                <div className="mini-counter-act">+</div>
                <p>1</p>
                <div className="mini-counter-act">-</div>               
              </div>
              <div className="mini-cart-image">
                  <img src={ProductD} alt="" />
              </div>
          </div>
      </div>
    </div>
    )
  }
}

export default MiniCartItem