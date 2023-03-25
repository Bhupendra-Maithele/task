import React, { useState } from 'react'
import '../../App.css'


const ProductList = ({ product, onDelete, onEdit }) => {

    const [name, setName] = useState(product.productName);
    const [image, setImage] = useState(product.productImage);
    const [price, setPrice] = useState(product.productPrice);



    const submit = (e) => {
        e.preventDefault();
        if (!name || !image || !price) {
            alert("Name, Image or Price cannot be blank");
        }
        else {
            let updateProduct = {
                productId: product.productId,
                productName: name,
                productImage: image,
                productPrice: price
            }
            onEdit(updateProduct)
        }
    }


    return (
        <>

            <div className="container mt-3">
                <div className="card" style={{ width: "250px" }}>
                    <img className="card-img-top" src={product.productImage} alt="image_not_found" style={{ width: "100%" }} />
                    <div className="card-body">
                        <h4 className="card-title">{product.productName}</h4>
                        <p className="card-text">{product.productPrice}</p>
                        <div className="d-flex justify-content-between mt-3">
                            <button className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Edit</button>
                            <button className="btn btn-sm btn-danger" onClick={() => { onDelete(product) }}>Delete</button>
                        </div>

                    </div>
                </div>
            </div>


            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Edit Product</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <form onSubmit={submit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Product Name</label>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">Product Image Link</label>
                                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className="form-control" id="image" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label">Product Price</label>
                                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" id="price" />
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <button type="submit" className="btn btn-success" data-bs-dismiss="modal">Update</button>
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList