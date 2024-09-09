import Products from "@/components/Products";
import { IProduct } from "@/constants/products";
import { Metadata, NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

interface MusicParams extends Params {
    category: string;
  }

  export async function generateMetadata({ params }: { params: MusicParams }) {
    return {
        title : `${params.category} Music`,
    }
}

export const generateStaticParams = () => {
    return [
        {category: "thunderdome"},
        {category: "hardcore-top-100"},
        {category: "hardcore-classics"},
    ]
}

export const revalidate = 3600;


const MusicCategoryPage: NextPage<{ params: MusicParams }> = async ({ params }) => {
    const { category } = params;
    const response = await fetch(`http://${process.env.VERCEL_URL}/api/music/${category}`, {
        cache: 'no-store',
    });

    if (!response.ok) {
        throw new Error('Something went wrong in the music/category page');
    }

    const musicCategory = await response.json();



    return (
        <div>
            <Products products={musicCategory.docs}/>
        </div>
    );
};

export default MusicCategoryPage;