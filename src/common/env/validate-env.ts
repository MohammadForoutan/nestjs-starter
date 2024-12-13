import { z } from 'zod';
import { LogLevel } from '../logger';


export const envSchema = z.object({
  PORT: z.coerce.number().optional().default(3030),
  LOG_LEVEL: z.enum(['debug', 'info', 'warn', 'error', 'fatal', 'trace', 'silent']),
});
export type Env = z.infer<typeof envSchema>;
