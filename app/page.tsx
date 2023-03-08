"use client";

import { ChangeEvent, MutableRefObject, useRef } from "react";
import Cart from "../components/cart/cart";
import useCartStore from "../store/cart";

const HomePage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { items } = useCartStore();

  const handleAddToCart = () => {
    if (!inputRef.current) return;

    useCartStore.setState({ items: [...items, inputRef.current.value] });
    inputRef.current.value = "";
  };

  return (
    <div>
      <Cart />
      <input type="text" ref={inputRef} />
      <button onClick={handleAddToCart}>add to cart</button>
    </div>
  );
};

export default HomePage;
