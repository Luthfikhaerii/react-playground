import {z} from 'zod'

export const loginSchema = z.object({
    email: z.string(),
    password: z.string().min(6)
})

export const registerSchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string().min(6)
})

export type registerSchemaType = z.infer<typeof registerSchema>
export type LoginSchemaType = z.infer<typeof loginSchema>