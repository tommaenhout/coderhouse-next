import Products from "@/components/Products";
import { NextPage } from "next";

export async function generateMetadata () {
    return {
        title : `Music`,
    }
}

const MusicPage : NextPage = async () => {
    const response = await fetch(`http://localhost:3000/api/music`, {
        cache: 'no-store',
    });

    if (!response.ok) {
        throw new Error('Something went wrong');
    }

    const music = await response.json();
   
    return (
       <Products products={music.docs}/>
    );
};

export default MusicPage;