import React, { createContext, CSSProperties, ReactElement } from "react";
import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";

import { Product, ProductContextProps } from "../interfaces/interfaces";
import { ProductTitle } from "./ProductTitle";
import { ProductImage } from "./ProductImage";
import { ProductButtons } from "./ProductButtons";
//Interface
export interface Props {
  product: Product;
  children: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}
//Context
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { counter, increaseBy } = useProduct();
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
        {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <h1 className={styles.productCard}></h1>
      <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};
