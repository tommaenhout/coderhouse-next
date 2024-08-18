import { products } from "@/constants/products";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";


export async function GET (request : Request, {params} : any) {
 const { category } = params;
 const _category = category as string;

 const filteredProducts =  products.filter(product => product.type === _category);

  return NextResponse.json({
        filteredProducts
  });

}