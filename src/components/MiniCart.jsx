import React, { Component } from 'react'
import MiniCartItem from './MiniCartItem'

export class MiniCart extends Component {
  render() {
    return (
      <div>
        <div><span className="mini-carttexts">My Bag.</span><span>2 items</span> </div>
        <MiniCartItem />
        <MiniCartItem />
        {/* <MiniCartItem />
        <MiniCartItem />
        <MiniCartItem /> */}
        <div className="mini-carttexts mini-cart-total flex ">
          <p>Total</p>
          <p>$100.00</p>
        </div>
        <div className="flex mini-cart-buttons">
          <button>VIEW BAG</button>
          <button>CHECK OUT</button>
        </div>
      </div>
    )
  }
}

export default MiniCart