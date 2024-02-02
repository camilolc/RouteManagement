import React, { useState } from "react";
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components/";
//Css
import "../styles/custom-styles.css";
import { products } from "../data/products";

export const ShoppingPage = () => {
 
  const product = products[0];

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

            
          <ProductCard
            key={product.id}
            product={product}
            initialValues={{
              count: 4,
              // maxCount: 10,
            }}
          >
            {
              ({count,increaseBy,isMaxCountReached,reset,maxCount})=> (
                <>
                  <ProductImage  />
                  <ProductTitle  />
                  <ProductButtons  />                 
                </>
              )

            }
          </ProductCard>     
    </div>
  );
};
