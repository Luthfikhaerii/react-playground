import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/product.api";

export const PRODUCT_QUERY_KEY = ["products"];

export function useProducts(){
    return useQuery({
        queryFn: getProducts,
        queryKey: PRODUCT_QUERY_KEY
    })
}