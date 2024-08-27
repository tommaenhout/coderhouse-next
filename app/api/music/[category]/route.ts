import { NextResponse } from "next/server";
import { returnDocsWitCategory } from "../../clothes/[category]/route";


export async function GET (request : Request, {params} : any) {
 const { category } = params;
 const docs = await returnDocsWitCategory(category);

  return NextResponse.json({
        docs
  });

}