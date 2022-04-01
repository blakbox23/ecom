import React, { Component } from 'react'
import ProductItem from './ProductItem'
import './style.css';

export class ProductsList extends Component {
  render() {
    return (
      <div>
          <div className="category-name">Category name</div>
        <div className="product-list flex">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          </div>
      </div>
    )
  }
}

export default ProductsList