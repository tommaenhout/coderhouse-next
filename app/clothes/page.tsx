import Products from "@/components/Products";
import { Metadata, NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function generateMetadata () {
    return {
        title : `Clothes`,
    }
}

const ClothesPage : NextPage <Params> = () => {

    return (
        <div>
            <Products name="clothes"/>
        </div>
    );
};

export default ClothesPage;