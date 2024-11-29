import { OrderWithProducts } from "@/src/types";

type LatestOrderItemsProps = {
  order: OrderWithProducts;
};

export default function LatestOrderItem({ order }: LatestOrderItemsProps) {
  return (
    <div className=" bg-white shadow p-5 scroll-y-5 rounded-lg">
      <p className=" text-lg font-bold text-slate-600">Client: {order.name}</p>
      <ul
        role="list"
        className=" divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500"
      >
        {order.orderProducts.map((item) => (
          <li key={item.id} className=" flex py-6 text-lg">
            <p>
              <span className=" font-bold ">({item.quantity}) </span>
              {item.product.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
