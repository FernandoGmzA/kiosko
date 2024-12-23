"use client";

import { useStore } from "@/src/store";
import React, { useMemo, useState } from "react";
import ProductDetails from "./ProductDetails";
import { formatCurrency } from "@/src/utils";
import { createOrder } from "@/actions/create-order-action";
import { orderSchema } from "@/src/schema";
import { toast } from "react-toastify";

const OrderSummary = () => {
  const order = useStore((state) => state.order);
  const clearOrder = useStore((state) => state.clearOrder);
  const total = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );

  const handleCreateOrder = async (formData: FormData) => {
    const data = {
      name: formData.get("name"),
      total,
      order,
    };

    const result = orderSchema.safeParse(data);

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }
    const response = await createOrder(data);

    if (response?.errors) {
      response.errors.forEach((issue) => {
        toast.error(issue.message);
      });
    }

    toast.success("Order placed successfully");
    clearOrder();
  };
  return (
    <aside className=" lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className=" text-4xl text-center font-black">My order</h1>

      {order.length === 0 ? (
        <p className=" text-center my-10 ">The order is empty</p>
      ) : (
        <div>
          {order.map((item) => (
            <ProductDetails key={item.id} item={item} />
          ))}
          <p className=" text-2xl mt-20 text-center">
            Total: <span className=" font-bold">{formatCurrency(total)}</span>
          </p>
          <form className="w-full mt-10 space-y-5" action={handleCreateOrder}>
            <input
              type="text"
              placeholder="Your name"
              className=" bg-white border border-gray-100 p-2 w-full"
              name="name"
            />
            <button
              type="submit"
              className="py-2 rounded uppercase text-white bg-black w-full text-center cursor-pointer"
              value={"Submit order"}
            >
              Submit order
            </button>
          </form>
        </div>
      )}
    </aside>
  );
};

export default OrderSummary;
