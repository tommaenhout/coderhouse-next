import Products from "@/components/Products";
import { Metadata, NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function generateMetadata ({params} : Params) {
    return {
        title : `${params.category} Music`,
    }
}

const MusicPage : NextPage <Params> = ({params}) => {
    const { category } = params;

    return (
        <div>
            <Products category={category}/>
        </div>
    );
};

export default MusicPage;