

import Card from "@/components/Card";
import Products from "@/components/Products";
import { IProduct } from "@/constants/products";
import next, { Metadata, NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function generateMetadata ({params} : Params) {
    return {
        title : `${params.category} Clothes`,
    }
}

const ClothesCategoryPage : NextPage <Params> = async ({params}) => {
    const { category } = params;
    const response = await fetch(`http://localhost:3000/api/clothes/${category}`, {
        cache: 'no-store',
    });

    const clothesCategory = await response.json();


    return (
        <div>
            <Products products={clothesCategory.docs}/>
        </div>
    );
};

export default ClothesCategoryPage;