import { z } from "zod";

export const ContactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters"),

  email: z
    .string()
    .email("Invalid email"),

  subject: z
    .string()
    .min(3, "Subject is required"),

  message: z
    .string()
    .min(10, "Message should be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof ContactSchema>;