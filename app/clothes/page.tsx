import Products from "@/components/Products";
import { IProduct } from "@/constants/products";
import { NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function generateMetadata () {
    return {
        title : `Clothes`,
    }
}

const ClothesPage : NextPage <Params> = async () => {
    const response = await fetch(`http://localhost:3000/api/tom`, {
        cache: 'no-store',
    });

    if (!response.ok) {
        throw new Error('Something went wrong');
    }

    const clothes = await response.json()
  

    return (
        <div>
            <Products products={clothes.docs}/>
        </div>
    );
};

export default ClothesPage;