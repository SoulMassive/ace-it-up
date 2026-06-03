import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string()
    .min(1, 'Name is required')
    .max(100, 'Name cannot exceed 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  email: z.string()
    .min(1, 'Email is required')
    .email('Please provide a valid email')
    .max(254, 'Email is too long'),
  phone: z.string()
    .optional()
    .or(z.literal(''))
    .refine((val) => {
      if (!val) return true;
      return /^[\d\s\+\-\(\)]{7,20}$/.test(val);
    }, 'Invalid phone number'),
  message: z.string()
    .min(1, 'Message is required')
    .max(1000, 'Message cannot exceed 1000 characters'),
});
