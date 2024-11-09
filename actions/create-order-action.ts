"use server";

import { orderSchema } from "@/src/schema";

export async function createOrder(data: unknown) {
  const result = orderSchema.safeParse(data);

  if (!result.success) {
    return {
      errors: result.error.issues,
    };
  }

  try {
  } catch (error) {}
}
