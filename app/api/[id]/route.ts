import { products } from "@/constants/products";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";


export async function GET (request : Request, {params} : any) {
 const { id } = params;
 const _id = parseInt(id);

 console.log("id", _id);
const filteredProduct = products.find(product => product.id === _id);

console.log(filteredProduct);

  return NextResponse.json({
        filteredProduct
  });

}