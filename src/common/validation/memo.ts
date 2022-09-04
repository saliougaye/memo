import * as z from 'zod';

export const addMemoSchema = z.object({
    title: z.string(),
    description: z.string().max(200).nullish(),
    reminder: z.date().min(new Date()),
    notify: z.boolean().default(true),
    category: z.object({
        id: z.string().optional(), // uuid check
        name: z.string(),
        color: z.string(),
    }).optional()
});

export type IAddMemoSchema = z.infer<typeof addMemoSchema>;