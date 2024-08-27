import Products from "@/components/Products";
import { IProduct } from "@/constants/products";
import { Metadata, NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function generateMetadata ({params} : Params) {
    return {
        title : `${params.category} Music`,
    }
}

const MusicCategoryPage : NextPage <Params> = async ({params})  => {
    const { category } = params;
    const response = await fetch(`http://localhost:3000/api/music/${category}`, {
        cache: 'no-store',
    });

    const musicCategory = await response.json();



    return (
        <div>
            <Products products={musicCategory.docs}/>
        </div>
    );
};

export default MusicCategoryPage;