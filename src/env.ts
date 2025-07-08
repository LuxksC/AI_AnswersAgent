import { z } from 'zod';
import 'dotenv/config';

const envSchema = z.object({
  PORT: z.coerce.number().default(3333), // Default value to PORT variable
  DATABASE_URL: z.string().url().startsWith('postgresql://'), // Validation for databse url
});

export const env = envSchema.parse(process.env);
