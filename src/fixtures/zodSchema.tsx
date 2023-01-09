import * as z from 'zod'



export const RegisterSchema = z.object({
    // name: z.string().min(4),
    // company: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6, 'Your Password needs to be atleast 6 digits')

})


export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, 'Your Password needs to be atleast 6 digits')

})