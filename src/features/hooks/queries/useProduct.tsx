import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../../api/product.api";

const PRODUCT_QUERY_KEY = ["product"]

export function useGetProduct() {
    return useQuery({
        queryFn: getProducts,
        queryKey: PRODUCT_QUERY_KEY
    })
}

export function useCreateProduct(options: { onSuccess: () => void, onError: () => void }) {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: createProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: PRODUCT_QUERY_KEY })
            options?.onSuccess?.()
        },
        onError: () => {
            options?.onError?.()
        }
    })
}

export function useUpdateProduct(options: { onSuccess: () => void, onError: () => void }) {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({ id, payload }: { id: number, payload: any }) => {
            return updateProduct(id, payload);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:PRODUCT_QUERY_KEY})
            options?.onSuccess?.()
        },
        onError:()=>{
            options?.onError?.()
        }
    })
}


export function useDeleteProduct(options:{onSuccess:()=>void,onError:()=>void}){
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: deleteProduct,
         onSuccess: () => {
            queryClient.invalidateQueries({queryKey:PRODUCT_QUERY_KEY})
            options?.onSuccess?.()
        },
        onError:()=>{
            options?.onError?.()
        }
    })
}