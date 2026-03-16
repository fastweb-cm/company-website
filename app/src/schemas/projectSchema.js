import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.number().int().nonnegative("Category is required"),
  image: z.string().url("Invalid image URL"),
  client: z.string().min(1, "Client name is required"),
  demo_link: z.string().url("Must be a valid URL").or(z.literal("")),
  
  /* The "Accounts" list (Array of objects)
  projectaccounts: z.array(
    z.object({
      role: z.string().min(1, "Role is required"),
      password: z.string().min(1, "Password is required"),
    })
  ).min(1, "Add at least one account"),*/
});