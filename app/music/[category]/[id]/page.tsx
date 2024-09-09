import ProductDetail from "@/components/ProductDetail";
import { NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

interface MusicParams extends Params {
    id: string;
  }


export async function generateMetadata ({params} : { params: MusicParams }) {
    return {
        title : `${params.id} Music`,
    }
}

const MusicPageDetail: NextPage<{ params: MusicParams }> = async ({ params }) => {
    const { id } = params;
    const response = await fetch(`http://localhost:3000/api/${id}`, {
        cache: 'no-store',
    });

    if (!response.ok) {
        throw new Error('Something went wrong in the music/id page');
    }

    const product = await response.json();

    return (
        <ProductDetail product={product.docs[0]}/>
    );
};

export default MusicPageDetail;