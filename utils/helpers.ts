import { links } from "@/constants/links";

export const returnSublinks = (name: string)  => {
    const sublinks = links.find(link => link.name === name)?.sublinks
    return sublinks ? sublinks : [];
}