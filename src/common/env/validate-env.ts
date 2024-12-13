import { z } from 'zod';

export const envSchema = z.object({
  PORT: z.coerce.number().optional().default(3030),
});
export type Env = z.infer<typeof envSchema>;