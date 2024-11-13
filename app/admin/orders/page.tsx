import OrderCard from "@/components/order/OrderCard";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function getPendingOrders() {
  const orders = prisma.order.findMany({
    where: {
      status: false,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });

  return orders;
}

export default async function OrdersPage() {
  const orders = await getPendingOrders();

  return (
    <>
      <Heading children={"Admin your orders"} />

      {orders.length ? (
        <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
          {orders.map((order) => (
            <OrderCard order={order} />
          ))}
        </div>
      ) : (
        <p className=" text-center">There are no pending orders</p>
      )}
    </>
  );
}
