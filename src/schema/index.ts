import { z } from "zod";

export const orderSchema = z.object({
  name: z.string().min(1, "Please add a name"),
  total: z.number().min(1, "Please add an item"),
});
