

import Card from "@/components/Card";
import Products from "@/components/Products";
import next, { Metadata, NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function generateMetadata ({params} : Params) {
    return {
        title : `${params.category} Clothes`,
    }
}

const ClothesPage : NextPage <Params> = async ({params}) => {
    const { category } = params;
    const response = await fetch(`http://localhost:3000/api/clothes/${category}`, {
        cache: 'default',
    });

    const { filteredProducts } = await response.json();

    console.log(filteredProducts);

    
    return (
        <div>
            <Products products={category}/>
        </div>
    );
};

export default ClothesPage;