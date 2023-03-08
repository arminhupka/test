import { create } from "zustand";

const useCartStore = create<{
  items: string[];
}>(() => ({
  items: ["test"],
}));

export default useCartStore;
