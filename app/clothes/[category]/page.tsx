
import Products from "@/components/Products";
import  {  NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

interface ClothesParams extends Params {
    category: string;
  }

  export async function generateMetadata({ params }: { params: ClothesParams }) {
    return {
        title : `${params.category} Clothes`,
    }
}



export const revalidate = 3600;


const ClothesCategoryPage: NextPage<{ params: ClothesParams }> = async ({ params }) => {
    const { category } = params;
    const response = await fetch(`http://${process.env.VERCEL_APP}/api/clothes/${category}`, {
        cache: 'no-store',
    });

    if (!response.ok) {
        throw new Error('Something went wrong in the clothes category page during the fetch');
    }

    const clothesCategory = await response.json();


    return (
        <div>
            <Products products={clothesCategory.docs}/>
        </div>
    );
};

export default ClothesCategoryPage;