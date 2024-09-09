import Products from "@/components/Products";
import { NextPage } from "next";

export async function generateMetadata () {
    return {
        title : `Clothes`,
    }
}

const ClothesPage : NextPage = async () => {
    const response = await fetch(`http://${process.env.VERCEL_APP}/api/clothes`, {
        cache: 'no-store',
    });

    if (!response.ok) {
        throw new Error('Something went wrong');
    }

    const clothes = await response.json()
  

    return (
        <div>
            <Products products={clothes.docs}/>
        </div>
    );
};

export default ClothesPage;