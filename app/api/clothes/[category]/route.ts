import { NextResponse } from "next/server";
import { getDocs, collection, query, where} from "firebase/firestore";	
import { db } from "@/firebase/config";



export async function GET (request : Request, {params} : any) {
 const { category } = params;
 if (category !== "australian" && category !== "bomberjackets" && category !== "shoes") {
      return NextResponse.json({ message: "Not Found" }, { status: 404 });
 }
 const _category = category as string;
 const productosRef = collection(db, 'products');
 const q = query(productosRef, where('type', '==', _category));
 const querySnapshot = await getDocs(q);
 const docs = querySnapshot.docs.map(doc => doc.data());


  return NextResponse.json({
       docs
  });

}