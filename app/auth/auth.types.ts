import { z } from "zod";

export const ZAuthentication = z.object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long.")
      .max(100, "Password must be less than 100 characters."),
      //more constraints
    salt: z.string(),
    sessionToken: z.string(),
  });



export const ZLogin = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters long')
});

export type ZLoginType = z.infer<typeof ZLogin>;
