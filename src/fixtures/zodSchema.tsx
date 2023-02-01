import * as z from 'zod'



export const RegisterSchema = z.object({
    name: z.string().min(5, 'Your Name must contain minimum 5 characters').max(20, 'Your Full Name Must Not Exceed 20 characters'),
    email: z.string().email(),
    password: z.string().min(6, 'Your Password needs to be atleast 6 digits')

})


export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, 'Your Password needs to be atleast 6 digits')

})