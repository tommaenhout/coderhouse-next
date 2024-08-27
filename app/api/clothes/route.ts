import { products } from "@/constants/products";
import { db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";


export const returnDocsWithName = async (name: string) => {
      const productosRef = collection(db, 'products');
      const q = query(
        productosRef,
        where('slug', '>=', name),
        where('slug', '<', `${name}\uf8ff`)
      );
      const querySnapshot = await getDocs(q);
      const docs = querySnapshot.docs.map(doc => doc.data());
      return docs;
    };



export async function GET () {
 const docs = await returnDocsWithName("/clothes");
  return NextResponse.json({
        docs
  });

}