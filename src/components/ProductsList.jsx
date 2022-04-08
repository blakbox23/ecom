import React, { Component } from 'react'
import {gql} from "@apollo/client";
import { graphql } from '@apollo/client/react/hoc';
import ProductItem from './ProductItem'
import './style.css';

const cat = 'all'

const getCategoryProducts=gql`
{
  category(input: {title: "${cat}"}){
    name
    products{
      id
      name
      brand
      gallery
      attributes{
        name
        
      }
    }
  }
}`

export class ProductsList extends Component {
  displayProducts(){
    let data = this.props.data;
    if(data.loading){
      return(<div>Loading Producra</div>)
    }else{
      return data.category.products.map(product=>{
        return(
          <ProductItem 
          brand = {product.brand}
          name= {product.name}
          pic={product.gallery[0]}
           />
        )
      }
      )
    }
  }
  capitalize(cat) {
    return cat[0].toUpperCase() + cat.slice(1).toLowerCase();
  }
  render() {
    console.log(this.props.data.category);

    return (      
      <div>
          <div className="category-name">{this.capitalize(cat)}</div>
        <div className="product-list flex">
          {this.displayProducts()}
          </div>
      </div>
    )
  }
}

export default graphql(getCategoryProducts)(ProductsList);