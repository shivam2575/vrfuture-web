import * as z from "zod";
export const formSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10 digit mobile number."),
  class: z.string().min(1, "Please select a class."),
  board: z.string().optional(),
  message: z.string().optional(),
  company: z.string().optional(),
});
