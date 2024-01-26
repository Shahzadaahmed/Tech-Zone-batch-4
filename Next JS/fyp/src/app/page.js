// Note: Products component...!

"use client";
import React, { useEffect } from 'react';

const Products = () => {

  // Note: Mounted hook...!
  useEffect(() => { // For user
    if (localStorage.getItem("AuthenticatedUser") != null) {
      let fetchUser = localStorage.getItem("AuthenticatedUser");
      // console.log('User: ', fetchUser);
    }

    else {
      localStorage.setItem("AuthenticatedUser", JSON.stringify(null));
    };
  }, []);

  useEffect(() => { // For ProductsList
    if (localStorage.getItem("ProductsList") != null) {
      let fetchProducts = localStorage.getItem("ProductsList");
      console.log('Products: ', fetchProducts);
    }

    else {
      localStorage.setItem("ProductsList", JSON.stringify([]));
    };
  }, []);

  return (
    <div>
      <h1> Products Screen! </h1>
    </div>
  );
};

export default Products;