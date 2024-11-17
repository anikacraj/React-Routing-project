import React from 'react'
import { useLocation,Link } from 'react-router-dom'

function ProductsDetails() {
    const {state} =useLocation()
    console.log(state)

    if(!state){
        return <h4>Product not found </h4>
    }
    const{id,title,brand,description,price,category,images,rating}=state
  return (
    <div className='product-details'>

<h2>Products Details </h2>

 

   <article className='product-details__article'>
   <img src={images[0]} alt="" className='product-details__img' />
      <h3>{brand}</h3>
      <h5> Category:{category}</h5>
      <h5>Price :{price}</h5>
      <h5>Rating :{rating}</h5>
      <p>Description :{description}</p>
      
      <Link to='/products'>Go to Products </Link>
      </article> 
    </div>

  )}

export default ProductsDetails