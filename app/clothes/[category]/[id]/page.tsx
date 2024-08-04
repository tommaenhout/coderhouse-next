import ProductDetail from "@/components/ProductDetail";
import { NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function generateMetadata ({params} : Params) {
    return {
        title : `${params.id} Clothes`,
    }
}

const ClothesPageDetail : NextPage <Params> = ({params}) => {
    const { id } = params;

    return (
        <div>
            <ProductDetail id={id}/>
        </div>
    );
};

export default ClothesPageDetail;