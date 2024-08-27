
import { NextResponse } from "next/server";
import { returnDocsWithName } from "../clothes/route";



export async function GET () {
      const docs = await returnDocsWithName("/music");
       return NextResponse.json({
             docs
       });
}
