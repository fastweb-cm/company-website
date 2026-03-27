// schemas/seoMetaSchema.js
import { z } from "zod";

export const seoMetaSchema = z.object({
  seo: z.object({
    meta_title: z.string().min(1, "Meta title is required").max(60, "Title too long"),
    meta_description: z.string().min(1, "Description is required").max(160, "Description too long"),
    meta_keywords: z.string().optional(),
    og_title: z.string().optional(),
    og_description: z.string().optional(),
    og_image: z
      .any()
      .optional()
      .refine(file => !file || file instanceof File || (file && typeof file === 'object'), "Invalid image"),
    canonical_url: z.string().url("Must be a valid URL").optional().or(z.literal('')),
    focus_keyword: z.string().optional(),
    schema_type: z.string().optional(),
  })
});
