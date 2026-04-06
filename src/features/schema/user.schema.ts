import { z } from "zod";

export const userSchema = z.object({
    name: z.string("must string").min(5),
    email: z.email("need email format"),
    password: z.string().min(5,"min 5")
})

export type UserSchemaType = z.infer<typeof userSchema>