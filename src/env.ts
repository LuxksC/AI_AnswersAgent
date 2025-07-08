import { z } from 'zod';

const envSchema = z.object({
  PORT: z.coerce.number().default(3333), // Default value to PORT variable
})

export const env = envSchema.parse(process.env);