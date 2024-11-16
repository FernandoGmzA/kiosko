import { number, z } from "zod";

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

export const orderIdSchema = z.object({
  orderId: z
    .string()
    .transform((value) => parseInt(value))
    .refine((value) => value > 0, { message: "Error on orderId" }),
});

export const SearchSchema = z.object({
  search: z.string().trim().min(1, { message: "Search cannot be empty" }),
});

export const ProductSchema = z.object({
  name: z.string().trim().min(1, { message: "Name cannot be empty" }),
  price: z
    .string()
    .trim()
    .transform((value) => parseFloat(value))
    .refine((value) => value > 0, { message: "Not valid price" })
    .or(z.number().min(1, { message: "You must enter a category" })),
  categoryId: z
    .string()
    .trim()
    .transform((value) => parseInt(value))
    .refine((value) => value > 0, { message: "You must enter a category" })
    .or(z.number().min(1, { message: "You must enter a category" })),
});
