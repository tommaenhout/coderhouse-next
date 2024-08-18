import { products } from "@/constants/products";
import { NextResponse } from "next/server";


export async function GET (request : Request, {params} : any) {
 const filteredProducts =  products.filter(product => product.slug.startsWith("/music"));
  return NextResponse.json({
        filteredProducts
  });

}
