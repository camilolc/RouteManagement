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
import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPage = () => {
  // const [shoppingCart, setShoppingCart] = useState<{
  //   [key: string]: ProductInCart;
  // }>({
  //   "1": { ...product1, count: 10 },
  //   "2": { ...product2, count: 2 },
  // });

  const { onProductCountChange, shoppingCart } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((data) => (
          <ProductCard
            key={data.id}
            product={data}
            className="bg-dark text-white"
            onChange={onProductCountChange}
            value={shoppingCart[data.id]?.count || 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark text-white"
            style={{ width: "100px" }}
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductImage className="custom-image" />
            <ProductButtons
              className="custom-buttons"
              style={{ display: "flex", justifyContent: "center" }}
            />
          </ProductCard>
        ))}
      </div>
      {/*   */}
    </div>
  );
};
