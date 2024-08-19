// AddProduct Screen!

"use client"
import React, { useState, useEffect } from 'react';

const AddProduct = () => {

    // States...!
    const [formStates, setFormStates] = useState({
        productName: "",
        productImage: "",
        productDescription: "",
        productPrice: ""
    });
    const [getProducts, setGetProducts] = useState([]);

    // Note: CLear states....!
    const clearStates = () => {
        setFormStates({
            productName: "",
            productImage: "",
            productDescription: "",
            productPrice: ""
        });
    };

    // Note: Function to add product...!
    const addProductHandler = () => {
        // console.log(formStates);

        let cloneProducts = [...getProducts];
        let targetObj = {
            ...formStates,
            quantity: 1
        };
        cloneProducts.push(targetObj);
        setGetProducts(cloneProducts);

        // console.log('Clone Products: ', getProducts);

        // Updating db...!
        localStorage.setItem("ProductsList", JSON.stringify(cloneProducts));
        clearStates();
        alert('Product added successfully!');
    };

    useEffect(() => {
        let fetchProducts = localStorage.getItem("ProductsList");
        let jsonData = JSON.parse(fetchProducts);
        setGetProducts(jsonData);
    }, []);

    return (
        <div>
            <h1> Add Product Screen! </h1>

            <label>
                Product Name:
                <input
                    type='text'
                    placeholder='Enter Product Name'
                    value={formStates.productName}
                    onChange={(e) => setFormStates({ ...formStates, productName: e.target.value })}
                />
            </label> <br />

            <label>
                Product Image:
                <input
                    type='text'
                    placeholder='Upload Image'
                    value={formStates.productImage}
                    onChange={(e) => setFormStates({ ...formStates, productImage: e.target.value })}
                />
            </label> <br />

            <label>
                Product Description:
                <input
                    type='text'
                    placeholder='Enter Product Description'
                    value={formStates.productDescription}
                    onChange={(e) => setFormStates({ ...formStates, productDescription: e.target.value })}
                />
            </label> <br />

            <label>
                Product Price:
                <input
                    type='text'
                    placeholder='Enter Product Price'
                    value={formStates.productPrice}
                    onChange={(e) => setFormStates({ ...formStates, productPrice: e.target.value })}
                />
            </label> <br />

            <button onClick={addProductHandler}>
                Add Product
            </button>
        </div>
    );
};

export default AddProduct;