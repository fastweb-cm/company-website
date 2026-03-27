import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.number().int().nonnegative("Category is required"),
  image: z.string().url("Invalid image URL"),
  client: z.string().min(1, "Client name is required"),
  demo_link: z.string().url("Must be a valid URL").or(z.literal("")),
  
   challengesolution: z.array(
    z.object({
      title: z.string().min(1, "Title required"),
      challenge: z.string().min(1, "Challenge required"),
      solution: z.string().min(1, "Solution required"),
    })
  ).min(1, "Add at least one challenge"),

  projectaccounts: z.array(
    z.object({
      role: z.string().min(1, "Role required"),
      password: z.string().min(1, "Password required"),
    })
  ).min(1, "Add at least one account"),
});
