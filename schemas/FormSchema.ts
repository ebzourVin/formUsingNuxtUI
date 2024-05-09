import { z } from 'zod'

export const schema = z.object({
    name: z.string({
      invalid_type_error: 'please enter valid name'
    }).min(3, 'Must be at least 3 characters'),
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'Must be at least 8 characters'),
    password_confirmation: z.string().min(8, 'Must be at least 8 characters'),
  }).refine((data) => data.password === data.password_confirmation, {
          message: "Passwords don't match",
          path: ["password_confirmation"],
    });