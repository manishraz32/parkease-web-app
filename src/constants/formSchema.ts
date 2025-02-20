import { z } from "zod";

const RegisterSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Name must be at least 2 characters long" })
      .max(50, { message: "Name must be at most 50 characters long" }),

    email: z
      .string()
      .min(5, { message: "Email must be at least 5 characters long" })
      .max(100, { message: "Email must be at most 100 characters long" })
      .email({ message: "Invalid email format" }),

    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(100, { message: "Password must be at most 100 characters long" })
      .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
      .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
      .regex(/[0-9]/, { message: "Password must contain at least one number" })
      .regex(/[@$!%*?&]/, { message: "Password must contain at least one special character" }),

    confirmPassword: z.string().min(8, { message: "Confirm Password is required" }),

    terms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// TypeScript types based on schema

export default {
    RegisterSchema,
  } as const;
