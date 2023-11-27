import { z } from 'zod';

const UserValidationSchema = z.object({
  passwrod: z
    .string({ invalid_type_error: 'Password must be string!' })
    .max(20, { message: 'Password can not be more than 20 characters.' })
    .optional(),
});

export const UserValication = {
  UserValidationSchema,
};
