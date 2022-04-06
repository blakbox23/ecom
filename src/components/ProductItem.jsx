import React, { Component } from 'react'
import './style.css';
import ProductD from '../assets/ProductD.png'


export class ProductItem extends Component {
  render() {
    return (
      <div className="product-card">
              <img src={this.props.pic} alt="" />
              <p className="product-name">{this.props.brand} {this.props.name}</p>
              <p className="product-cost">$500.00</p>
      </div>
    )
  }
}

export default ProductItem