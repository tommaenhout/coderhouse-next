import { products } from "@/constants/products";
import { db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";


export async function GET () {
  const productosRef = collection(db, 'products');
      const q = query(
        productosRef,
        where('slug', '>=', "/clothes"),
        where('slug', '<', `/clothes\uf8ff`)
      );
      const querySnapshot = await getDocs(q);
      const docs = querySnapshot.docs.map(doc => doc.data());

  return NextResponse.json({
        docs
  });

}