// Code: app/api/example/route.tsx
import { products } from "@/constants/products";
import { filterProducts } from "@/utils/helpers";
import { NextResponse } from "next/server";


export async function GET(request : Request, params : { category: string }) {
  const { category } = params;
  const filteredProducts =  filterProducts({category, products});
  return NextResponse.json({
      filteredProducts
  });
}
