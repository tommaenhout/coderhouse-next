import { links } from "@/constants/links";
import { IProduct } from "@/constants/products";

export const returnSublinks = (name: string)  => {
    const sublinks = links.find(link => link.name === name)?.sublinks
    return sublinks ? sublinks : [];
}

interface FilterProductsParams {
    category?: string;
    name?: "clothes" | "music";
    products: IProduct[];
  }
  
  export const filterProducts = ({ category, name, products}: FilterProductsParams) => {
    if (!category && !name) return products;
    if (name) return products.filter(product => product.slug.startsWith("/" + name));
    return products.filter(product => product.type === category);
  }