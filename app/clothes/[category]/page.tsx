import { Metadata, NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function generateMetadata ({params, searchParams} : Params , parent : Metadata) {
    return {
        title : `${params.category} Clothes`,
    }
}

const ClothesPage : NextPage <Params> = ({params}) => {
    const { category } = params;

    return (
        <div>
            <h1>{category} Clothes</h1>
        </div>
    );
};

export default ClothesPage;