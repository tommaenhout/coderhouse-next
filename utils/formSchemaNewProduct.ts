import { z } from "zod"

const isFile = (val: unknown) => {
  if (typeof window !== "undefined" && val instanceof File) {
    return true;
  }
  return false;
};

export const formSchemaNewProduct = z.object({
    title: z.string().min(1, { message: "Title is required." }),
    description: z.string().min(1, { message: "Description is required." }),
    inStock: z.preprocess((val) => Number(val), z.number().nonnegative({ message: "Stock must be a non-negative number." })),
    price: z.preprocess((val) => Number(val), z.number().positive({ message: "Price must be a positive number." })),
    name : z.string().min(1, { message: "Name is required." }),
    type: z.string().min(1, { message: "Type is required." }),
    file: z.custom(isFile, { message: "Image is required." }),
  })
  