import { products } from "@/constants/products";
import { NextResponse } from "next/server";


export async function GET () {
 const filteredProducts =  products.filter(product => product.slug.startsWith("/clothes"));

  return NextResponse.json({
        filteredProducts
  });

}