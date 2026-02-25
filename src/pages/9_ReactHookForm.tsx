import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { loginSchema } from "../features/schema/auth.schema"

export default function ReactHookForm() {
    const { register, handleSubmit, formState: { errors, isLoading, isSubmitted } } = useForm<any>({
        resolver: zodResolver(loginSchema),
        mode: "onSubmit"
    })

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                {errors.name && <p>{(errors.name as any)?.message}</p>}
                <input
                    type="text"
                    placeholder="Name"
                    {...register("name")}
                />
            </div>
            <div>
                {errors.email && <p>{(errors.email as any)?.message}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                />
            </div>
            <div>
                {errors.password && <p>{(errors.password as any)?.message}</p>}
                <input
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                />
            </div>
            <button type="submit" disabled={isLoading || isSubmitted}>Submit</button>
        </form>
    )
}