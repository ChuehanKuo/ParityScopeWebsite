import { z } from "zod/v4";

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name must be 50 characters or fewer"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name must be 50 characters or fewer"),
  email: z.email("Please enter a valid email address"),
  company: z
    .string()
    .min(1, "Company name is required")
    .max(100, "Company name must be 100 characters or fewer"),
  jobTitle: z
    .string()
    .max(100, "Job title must be 100 characters or fewer")
    .optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be 2000 characters or fewer"),
});

export const demoRequestSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name must be 50 characters or fewer"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name must be 50 characters or fewer"),
  email: z.email("Please enter a valid work email address"),
  company: z
    .string()
    .min(1, "Company name is required")
    .max(100, "Company name must be 100 characters or fewer"),
  jobTitle: z
    .string()
    .min(1, "Job title is required")
    .max(100, "Job title must be 100 characters or fewer"),
  companySize: z.enum([
    "1-50",
    "51-200",
    "201-1000",
    "1001-5000",
    "5000+",
  ]),
  useCase: z
    .string()
    .min(10, "Please describe your use case (at least 10 characters)")
    .max(2000, "Use case must be 2000 characters or fewer"),
  regulations: z
    .array(
      z.enum([
        "eu-ai-act",
        "south-korea",
        "taiwan",
        "section-1557",
        "hipaa",
        "other",
      ])
    )
    .optional(),
});

export const newsletterSchema = z.object({
  email: z.email("Please enter a valid email address"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type DemoRequestData = z.infer<typeof demoRequestSchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;
