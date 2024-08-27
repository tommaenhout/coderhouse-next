import { NextResponse } from "next/server";
import { getDocs, collection, query, where} from "firebase/firestore";	
import { db } from "@/firebase/config";

export async function GET (request : Request, {params} : any) {
  const { id } = params;
  const productosRef = collection(db, 'products');

  let q;

 if (id == "all"){
    q = query(productosRef);
 } else {
    q = query(productosRef, where('id', '==', id));
 }

  const querySnapshot = await getDocs(q);

 const docs = querySnapshot.docs.map(doc => doc.data());
    return NextResponse.json({
        docs
    });


}