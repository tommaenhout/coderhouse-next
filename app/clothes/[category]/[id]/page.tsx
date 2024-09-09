import ProductDetail from "@/components/ProductDetail";
import { NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

interface ClothesParams extends Params {
    category: string;
    id: string;
  }

  export async function generateMetadata({ params }: { params: ClothesParams }) {
    return {
      title: `${params.category} Clothes - ${params.id}`,
    };
  }

  const ClothesPageDetail: NextPage<{ params: ClothesParams }> = async ({ params }) => {
    const { id } = params;
    const response = await fetch(`http://${process.env.VERCEL_APP}/api/${id}`, {
        cache: 'no-store',
    });

    if (!response.ok) {
        throw new Error('Something went wrong in the clothes/id page during the fetch');
    }

    const product = await response.json();

    return (
        <ProductDetail product={product.docs[0]}/>
    );
};

export default ClothesPageDetail;