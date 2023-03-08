"use client";

import { useRef, useState } from "react";
import useCartStore from "./cart";

const CartInitializer = ({ items }: { items: string[] }) => {
  const [hasState, setHasState] = useState<boolean>(false);
  // const provider = useRef(false);
  if (!hasState) {
    useCartStore.setState({ items });
    setHasState(true);
    // provider.current = true;
  }

  return hasState;
};

export default CartInitializer;
