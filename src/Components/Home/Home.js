import React, { useState } from 'react'
import product from '../../config.json';
import '../../App.css';


const Home = ({ addProduct }) => {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState();


    const submit = (e) => {
        e.preventDefault();
        if (!name || !image || !price) {
            alert("Name, Image or Price cannot be blank");
        }
        else {
            addProduct(name, image, price);
            setName("");
            setImage("");
            setPrice()
        }
    }

    return (
        <div className="container my-3">
            <h3 style={{ marginTop: '100px' }}> Add a Product</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Product Name</label>
                    <input type="text" value={product.productName} onChange={(e) => setName(e.target.value)} className="form-control" id="name" />

                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Product Image Link</label>
                    <input type="text" value={product.productImage} onChange={(e) => setImage(e.target.value)} className="form-control" id="image" />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Product Price</label>
                    <input type="number" value={product.productPrice} onChange={(e) => setPrice(e.target.value)} className="form-control" id="price" />
                </div>
                <button type="submit" className="btn btn-sm btn-success text-center">Add Product</button>
            </form>
        </div>
    )
}

export default Home