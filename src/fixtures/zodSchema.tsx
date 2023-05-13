import * as z from 'zod'

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
)

export const RegisterSchema = z.object({
    name: z.string().min(5, 'Your Name must contain minimum 5 characters').max(20, 'Your Full Name Must Not Exceed 20 characters'),
    email: z.string().email(),
    password: z.string().min(6, 'Your Password needs to be atleast 6 digits'),
    phone: z.string().regex(phoneRegex, 'Invalid Number!').optional(),
})


export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, 'Your Password needs to be atleast 6 digits')
})

export const addSingleContactSchema = z.object({
    fullName: z.string().min(5, 'The Name must contain minimum 5 characters').max(20, 'Your Full Name Must Not Exceed 20 characters'),
    personal_email: z.string().email(),
    headline: z.string().min(6, 'Enter Job title correctly'),
    linkedInAddress: z.string().url().optional().default('https://www.linkedin.com/404/?_l=en_US'),
    company_name: z.string().min(3, 'Enter The Company Name'),
    city: z.string().min(2, 'Specify their Location if known')
})