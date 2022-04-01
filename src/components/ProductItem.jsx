import React, { Component } from 'react'
import './style.css';
import ProductD from '../assets/ProductD.png'


export class ProductItem extends Component {
  render() {
    return (
      <div className="product-card">
              <img src={ProductD} alt="" />
              <p className="product-name">Apollo Running Short</p>
              <p className="product-cost">$500.00</p>
      </div>
    )
  }
}

export default ProductItem