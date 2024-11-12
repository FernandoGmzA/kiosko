import { z } from "zod";

export const orderSchema = z.object({
  name: z.string().min(1, "Please add a name"),
  total: z.number().min(1, "Please add an item"),
  order: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      price: z.number(),
      quantity: z.number(),
      subtotal: z.number(),
    })
  ),
});
