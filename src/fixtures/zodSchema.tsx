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

export const addSingleContactSchema = z.object({
    fullName: z.string().min(5, 'The Name must contain minimum 5 characters').max(20, 'Your Full Name Must Not Exceed 20 characters'),
    personal_email: z.string().email(),
    headline: z.string().min(6, 'Enter Job title correctly'),
    linkedInAddress: z.string().url('Paste Their LinkedIn Profile Url here').optional(),
    company_name: z.string().min(3, 'Enter The Company Name'),
    city: z.string().min(2,'Specify their Location if known')
})