import { Metadata, NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function generateMetadata ({params} : Params) {
    return {
        title : `${params.id}`,
    }
}

const MusicPage : NextPage <Params> = ({params}) => {
    const { id } = params;

    return (
        <div>
            <h1>{id} product-detail</h1>
        </div>
    );
};

export default MusicPage;