"use client";

import { ReactElement } from "react";
import useCartStore from "../../store/cart";

const Cart = (): ReactElement => {
  const { items } = useCartStore();

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
