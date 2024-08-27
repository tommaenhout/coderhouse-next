import Products from "@/components/Products";
import { IProduct } from "@/constants/products";
import { Metadata, NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function generateMetadata () {
    return {
        title : `Music`,
    }
}

const MusicPage : NextPage <Params> = async () => {
    const response = await fetch(`http://localhost:3000/api/music`, {
        cache: 'no-store',
    });

    const music = await response.json();
   
    return (
       <Products products={music.docs}/>
    );
};

export default MusicPage;