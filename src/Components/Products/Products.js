import React from 'react'
import ProductList from '../ProductList/ProductList';
import '../../App.css'


const Products = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
  return (
    <div className="container" style={myStyle}>
            <h3 className="my-3">Product List</h3>
            {props.products.length===0? "No Products to display":  
            props.products.map((product)=>{
                return (<ProductList product={product} key={product.productId} onDelete={props.onDelete} onEdit={props.onEdit}/>   
                )
            })
        } 
    </div>
  )
}

export default Products