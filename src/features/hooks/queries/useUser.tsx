import { useMutation, useQuery, useQueryClient, type MutationFunctionContext, type UseMutationOptions, type UseQueryOptions } from "@tanstack/react-query";
import { getAuth, loginAuth } from "../../api/auth.api";

const userKey = {
    all: ["user"],
    query: (query: any) => ["user", query]
}

export function useGetUser(options?: Omit<UseQueryOptions, "queryFn" | "queryKey">) {
    return useQuery({
        queryFn: getAuth,
        queryKey: userKey.all,
        staleTime: 60 * 5,
        ...options
    })
}

type GetUserParams = {
    page: number,
    skip: number,
    search: string
}

type UseCreateUser = {
    params?: GetUserParams,
    options?: Omit<UseMutationOptions, "mutationFn" | "mutationKey">
}

export function useCreateUser({ params, options }: UseCreateUser) {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: loginAuth,
        mutationKey: userKey.query(params),
        onSuccess: (data: any, variables: any, onMutateResult: unknown, context: MutationFunctionContext) => {
            queryClient.invalidateQueries({ queryKey: userKey.all })

            options?.onSuccess?.(data, variables, onMutateResult, context)
        },
        ...options
    })
}