import { z } from 'zod'
import { contactsSchema, returnContactSchema } from './contact.schema';

const userSchema = z.object({
    name: z.string().min(3).max(50),
    email: z.string().email().max(45),
    phone_number: z.string().max(11),
    password: z.string().min(4).max(120)   
})


const returnUserSchema = userSchema
  .extend({
    id: z.string(),
    createdAt: z.date(),
    contacts: z.array(returnContactSchema).default([]),
  }).omit({ password: true })

const returnAllUsersSchema = returnUserSchema.array()

const updateUserSchema = z.object({
    name: z.string().max(45).optional(),
    email: z.string().email().optional(),
    password: z.string().optional(),
    phone_number: z.string().optional()
  });

export {
    userSchema,
    returnUserSchema,
    returnAllUsersSchema,
    updateUserSchema,
    contactsSchema  
}