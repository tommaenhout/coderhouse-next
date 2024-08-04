import ProductDetail from "@/components/ProductDetail";
import { NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function generateMetadata ({params} : Params) {
    return {
        title : `${params.id} Music`,
    }
}

const MusicPageDetail : NextPage <Params> = ({params}) => {
    const { id } = params;

    return (
        <ProductDetail id={id}/>
    );
};

export default MusicPageDetail;