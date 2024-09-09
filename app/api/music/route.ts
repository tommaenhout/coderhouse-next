
import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";



export async function GET () {
      const productosRef = collection(db, 'products');
      const q = query(
        productosRef,
        where('slug', '>=', "/music"),
        where('slug', '<', `/music\uf8ff`)
      );
      const querySnapshot = await getDocs(q);
      const docs = querySnapshot.docs.map(doc => doc.data());
       return NextResponse.json({
             docs
       });
}
