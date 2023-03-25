import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import NoPage from "./Components/NoPage/NoPage";
import initProducts from './config.json'
import Products from "./Components/Products/Products";
import './App.css';

function App() {
  const [products, setProducts] = useState(initProducts);


  const onEdit = (product) => {
    const updateProduct = products.map(prod => {
      if (prod.productId === product.productId) {
        return { ...prod, productName: product.productName, productImage: product.productImage, productPrice: product.productPrice };
      }
      return prod;
    });
    setProducts(updateProduct);
  }
  const onDelete = (product) => {
    setProducts(products.filter((e) => {
      return e !== product;
    }));
  }
  const addProduct = (name, image, price) => {
    let productId;
    if (products.length === 0) {
      productId = 0;
    }
    else {
      productId = products[products.length - 1].productId + 1;
    }
    const myProduct = {
      productId: productId,
      productName: name,
      productImage: image,
      productPrice: price
    }
    setProducts([...products, myProduct]);
  }


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<><Home addProduct={addProduct} /> <Products products={products} onDelete={onDelete} onEdit={onEdit} /> </>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoPage />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
