import Products from "@/components/Products";
import { Metadata, NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function generateMetadata ({params} : Params) {
    return {
        title : `${params.category} Music`,
    }
}

const MusicPage : NextPage <Params> = async ({params})  => {
    const { category } = params;
    const response = await fetch(`http://localhost:3000/api/music/${category}`, {
        cache: 'default',
    });

    const { filteredProducts } = await response.json();

    return (
        <div>
            <Products products={filteredProducts}/>
        </div>
    );
};

export default MusicPage;