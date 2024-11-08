"use client";

import { Product } from "@prisma/client";
import { useStore } from "@/src/store";

type AddProductButtonProps = {
  product: Product;
};

export default function AddProductButton({ product }: AddProductButtonProps) {
  const addToCart = useStore((state) => state.addToCart);
  return (
    <button
      type="button"
      className=" bg-indigo-600 hover:bg-indigo-800 w-full text-white mt-5 p-3 font-bold cursor-pointer"
      onClick={() => addToCart(product)}
    >
      Agregar
    </button>
  );
}
