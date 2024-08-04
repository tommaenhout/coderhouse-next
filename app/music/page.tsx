import Products from "@/components/Products";
import { Metadata, NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function generateMetadata () {
    return {
        title : `Music`,
    }
}

const MusicPage : NextPage <Params> = () => {
    return (
       <Products name="music"/>
    );
};

export default MusicPage;