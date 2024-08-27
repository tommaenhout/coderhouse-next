import ProductDetail from "@/components/ProductDetail";
import { products } from "@/constants/products";
import { NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function generateMetadata ({params} : Params) {
    return {
        title : `${params.id} Music`,
    }
}

const ClothesPageDetail : NextPage <Params> = async  ({params})  => {
    const { id } = params;
    const response = await fetch(`http://localhost:3000/api/${id}`, {
        cache: 'no-store',
    });

    const product = await response.json();

    return (
        <ProductDetail product={product.docs[0]}/>
    );
};

export default ClothesPageDetail;