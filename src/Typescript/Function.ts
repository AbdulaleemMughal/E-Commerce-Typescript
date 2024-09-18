import { ProductCategories } from "./Header.Interface";
import { HomeProducts } from "./Home.Interface";

export const fetchCategoryData = async (url: string) => {
    const data = await fetch(url);
    const json = await data.json();

    return json as ProductCategories[];
};

export const fetchAllProducts = async (url: string) => {
    const data = await fetch(url);
    const json = await data.json();

    return json as HomeProducts[];
};