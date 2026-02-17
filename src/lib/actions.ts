"use server";

import { contactFormSchema, demoRequestSchema, newsletterSchema } from "@/lib/validations";
import {
  sendContactNotification,
  sendDemoRequestNotification,
  sendDemoConfirmation,
  addNewsletterSubscriber,
} from "@/lib/email";

export type ActionResult = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitContactForm(
  _prevState: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  const raw = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    company: formData.get("company"),
    jobTitle: formData.get("jobTitle") || undefined,
    message: formData.get("message"),
  };

  const result = contactFormSchema.safeParse(raw);

  if (!result.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of result.error.issues) {
      const field = String(issue.path[0]);
      if (!fieldErrors[field]) fieldErrors[field] = [];
      fieldErrors[field].push(issue.message);
    }
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: fieldErrors,
    };
  }

  try {
    await sendContactNotification(result.data);
    return {
      success: true,
      message: "Thank you! We'll get back to you within 1 business day.",
    };
  } catch (error) {
    console.error("[Action] Contact form error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again or email us directly.",
    };
  }
}

export async function submitDemoRequest(
  _prevState: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  const raw = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    company: formData.get("company"),
    jobTitle: formData.get("jobTitle"),
    companySize: formData.get("companySize"),
    useCase: formData.get("useCase"),
    regulations: formData.getAll("regulations").filter(Boolean) as string[],
  };

  const result = demoRequestSchema.safeParse(raw);

  if (!result.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of result.error.issues) {
      const field = String(issue.path[0]);
      if (!fieldErrors[field]) fieldErrors[field] = [];
      fieldErrors[field].push(issue.message);
    }
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: fieldErrors,
    };
  }

  try {
    const data = result.data;
    await Promise.all([
      sendDemoRequestNotification(data),
      sendDemoConfirmation({ firstName: data.firstName, email: data.email }),
    ]);
    return {
      success: true,
      message: "Demo request received! Check your email for confirmation.",
    };
  } catch (error) {
    console.error("[Action] Demo request error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again or email us directly.",
    };
  }
}

export async function submitNewsletter(
  _prevState: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  const raw = {
    email: formData.get("email"),
  };

  const result = newsletterSchema.safeParse(raw);

  if (!result.success) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  try {
    await addNewsletterSubscriber(result.data.email);
    return {
      success: true,
      message: "You're subscribed! Look out for our next newsletter.",
    };
  } catch (error) {
    console.error("[Action] Newsletter signup error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
