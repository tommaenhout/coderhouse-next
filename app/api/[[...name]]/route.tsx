// Code: app/api/example/route.tsx
import { IProduct, products } from "@/constants/products";
import { filterProducts } from "@/utils/helpers";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";


export async function GET(request : Request, params : Params) {
  const {name} = params;
  const nameValue = Array.isArray(name) ? name[0] : name;
  console.log("holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  console.log(nameValue);
 
  return NextResponse.json({
      hola : "hola"
  });

}
