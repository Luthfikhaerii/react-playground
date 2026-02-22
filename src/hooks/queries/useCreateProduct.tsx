import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../../services/product.api";

export function useCreateProduct(payload:any){
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createProduct,
    onSuccess:()=>{
        
    }
  })
}