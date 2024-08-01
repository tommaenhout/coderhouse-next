import { Metadata, NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function generateMetadata () {
    return {
        title : `Music`,
    }
}

const MusicPage : NextPage <Params> = () => {
    return (
        <div>
            <h1>All Music</h1>
        </div>
    );
};

export default MusicPage;