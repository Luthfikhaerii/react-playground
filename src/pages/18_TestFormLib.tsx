import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { type UserSchemaType, userSchema } from "../features/schema/user.schema"


//register, formState {errors,isLoading,isSubmitted},handleSubmit
export default function TestFormLib() {
    const {getValues,watch,handleSubmit,register,formState: {errors,isLoading,isSubmitted} } = useForm<UserSchemaType>({
        resolver: zodResolver(userSchema)
    })

    const onSubmit = (data:UserSchemaType) => {
        alert(JSON.stringify(data))
    }

    return (
        <div>
            {
                isSubmitted && <div>
                    <p>{getValues("name")}</p>
                    <p>{getValues("email")}</p>
                </div>
            }
            <div>
                <p>live change</p>
                <p>{watch("name")}</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">name</label>
                    <input {...register("name")} type="text" id="name" />
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input {...register("email")} type="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input {...register("password")} type="pasword" id="password" />
                </div>
                <button type="submit" disabled={isLoading}>{isLoading?"loading":"submit"}</button>
            </form>
        </div>
    )
}