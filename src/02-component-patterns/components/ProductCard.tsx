import React, {
  createContext,
  ReactElement,
  useContext,
  useState,
} from "react";
import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";

import {
  ProductCardProps,
  Product,
  ProductContextProps,
} from "../interfaces/interfaces";
import { ProductTitle } from "./ProductTitle";
import { ProductImage } from "./ProductImage";
import { ProductButtons } from "./ProductButtons";

//Context
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>
        {children}
        {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <h1 className={styles.productCard}></h1>
      <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};
