// Note: Products component...!

"use client";
import React, { useEffect, useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

const Products = () => {

  // States...!
  const [allProducts, setAllProducts] = useState([]);
  const [authUser, setAuthUser] = useState(null);
  const [bucket, setBucket] = useState([]);

  // Note: Mounted hook...!
  useEffect(() => { // For user
    if (localStorage.getItem("AuthenticatedUser") != null) {
      let fetchUser = localStorage.getItem("AuthenticatedUser");
      let jsonData = JSON.parse(fetchUser);
      console.log('User: ', jsonData);
      setAuthUser(jsonData);
    }

    else {
      localStorage.setItem("AuthenticatedUser", JSON.stringify(null));
    };
  }, []);

  useEffect(() => { // For ProductsList
    if (localStorage.getItem("ProductsList") != null) {
      let fetchProducts = localStorage.getItem("ProductsList");
      let jsonData = JSON.parse(fetchProducts);
      // console.log('Products: ', jsonData);
      setAllProducts(jsonData);
    }

    else {
      localStorage.setItem("ProductsList", JSON.stringify([]));
    };
  }, []);

  // Note: Function to add item in shopping cart...!
  const addItemToSHoppingCart = (productData) => {

    if (!authUser) alert("You are not authenticated\nPlease log in first!");
    else if (authUser.email == "admin@gmail.com") alert("You cannot place an order!");
    else {
      console.log('Product Data: ', productData);

      let isAlreadyAdded = false;
      let bucketClone = [...bucket];

      for (let i = 0; i < bucketClone.length; i++) {
        // console.log(bucketClone[i])

        if (productData.productName == bucketClone[i].productName) {
          isAlreadyAdded = true;
          break;
        };
      };

      if (isAlreadyAdded) alert(productData.productName + " is already in cart");
      else {
        bucketClone.push(productData);
        setBucket(bucketClone);
        alert('Item added1');

        // Saving order in db / local storage...!
        localStorage.setItem("YourOrder", JSON.stringify(bucketClone));

        console.log('Bucket: ', bucketClone);
      };
    };
  };

  return (
    <div>
      <h1> Products Screen! </h1>
      <hr />

      {
        (allProducts && allProducts.length > 0)
          ?
          (
            allProducts.map((item, index) => {
              return (
                <MDBCard key={index}>
                  <MDBCardImage
                    src={item.productImage}
                    position='top'
                    alt={item.productName}
                    style={{
                      height: 60,
                      width: 60,
                      objectFit: "contain"
                    }}
                  />
                  <MDBCardBody>
                    <MDBCardTitle>
                      {item.productName}
                    </MDBCardTitle>

                    <MDBCardText>
                      {item.productDescription}
                    </MDBCardText>

                    <MDBBtn onClick={() => addItemToSHoppingCart(item)}> Add to Cart </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              );
            })
          )
          :
          (<h1> No Product Found 😢 </h1>)
      }
    </div>
  );
};

export default Products;