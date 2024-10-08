import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";


export async function GET (request : Request, {params} : any) {
 const { category } = params;
 const _category = category as string;
 const productosRef = collection(db, 'products');
 const q = query(productosRef, where('type', '==', _category));
 const querySnapshot = await getDocs(q);
 const docs = querySnapshot.docs.map(doc => doc.data());


  return NextResponse.json({
        docs
  });

}