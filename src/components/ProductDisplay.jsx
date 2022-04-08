import React, { Component } from 'react'
import './style.css';
import ProductD from '../assets/ProductD.png'

export class ProductDisplay extends Component {
  render() {
    return (
      <div className="product-display flex">
          <div className="mini-images flex">
            <div className="mini-prod-image"><img src={ProductD} alt="prod" /> </div>
            <div className="mini-prod-image"><img src={ProductD} alt="prod" /> </div>
            <div className="mini-prod-image"><img src={ProductD} alt="prod" /> </div>
          </div>

          <div className="main-prod-display flex">
              <div className="product-display-image">
                <img src={ProductD} alt="prod" />
              </div>
              <div className="product-display-text flex">
                <div>
                    <p className="brand-name">Apollo</p>
                    <p className="brand-prod-name">Running Short</p>
                </div>
                <div className="prod-checkbox">
                    <p>size: </p>  
                    Checkboxes
                </div>
                <div className="prod-price">
                    <p>Price</p>
                    <p>$ 50.00</p>
                </div>
                <div >
                    <button className="add-cart-button"> ADD TO CART</button>
                </div>
                <div className="prod-description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quae dicta sed perferendis inventore? Quidem esse soluta fuga hic culpa.
                </div>
              </div>

          </div>
      </div>
    )
  }
}

export default ProductDisplay