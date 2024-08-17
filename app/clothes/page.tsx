import Products from "@/components/Products";
import { Metadata, NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function generateMetadata () {
    return {
        title : `Clothes`,
    }
}

const ClothesPage : NextPage <Params> = async () => {
    const response = await fetch(`http://localhost:3000/api/clothes`, {
        cache: 'no-store',
    });

    const { filteredProducts } = await response.json();
    return (
        <div>
            <Products products={filteredProducts}/>
        </div>
    );
};

export default ClothesPage;