import { z } from "zod"

export const formSchemaNewProduct = z.object({
    title: z.string().min(1, { message: "Title is required." }),
    description: z.string().min(1, { message: "Description is required." }),
    inStock: z.preprocess((val) => Number(val), z.number().nonnegative({ message: "Stock must be a non-negative number." })),
    price: z.preprocess((val) => Number(val), z.number().positive({ message: "Price must be a positive number." })),
    slug: z.string().min(1, { message: "Slug is required." }),
    image: z.string().url({ message: "Image must be a valid URL." }),
    type: z.string().min(1, { message: "Type is required." }),
  })
  