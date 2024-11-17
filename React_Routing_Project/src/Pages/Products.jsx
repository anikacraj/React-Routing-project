import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

function Products() {
  const[products,setProducts]=useState([]);
  const[loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true)
    fetch('https://dummyjson.com/products')


    .then((res) => res.json())
    
    .then((data) =>{
console.log(data)
setProducts(data.products)
setLoading(false)
    } )
    .catch((error) => console.error('Error fetching data:', error));
  
  },[]);
  return (
    <div className='products-container'>

<h2>All Products </h2>
{loading && <p>Products is loading......</p>}
<section className='products'>
  
  {products && products.length >0 && products.map((product)=>{
  //  const{id,title,brand,description,price,category,image}=product
   return( <article className='product' key={product.id}>
 <img src={product.images[0]} alt="" className='product__img' />
  <h3>{product.title}</h3>

    <h3>{product.brand}</h3>
    <p> Category:{product.category}</p>
    <h4>Price :{product.price}</h4>
    <p>Description :{product.description.substring(0,50)}....</p>
    <Link className='product__link' to={`/products/${product.id}`} 
    state={product}> Show Details</Link>
  

   </article>
   
  )
  })}
  
   </section>

    </div>
  )
}

export default Products