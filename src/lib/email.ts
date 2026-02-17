import { Resend } from "resend";

function getResendClient() {
  return new Resend(process.env.RESEND_API_KEY || "");
}

const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@parityscope.com";
const TEAM_EMAIL = process.env.TEAM_EMAIL || "hello@parityscope.com";

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail({ to, subject, html, replyTo }: SendEmailOptions) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("[Email] RESEND_API_KEY not set — skipping email send");
    return { success: true, skipped: true };
  }

  const resend = getResendClient();
  const { data, error } = await resend.emails.send({
    from: `ParityScope <${FROM_EMAIL}>`,
    to,
    subject,
    html,
    ...(replyTo && { replyTo }),
  });

  if (error) {
    console.error("[Email] Failed to send:", error);
    throw new Error(`Failed to send email: ${error.message}`);
  }

  return { success: true, id: data?.id };
}

export async function sendContactNotification(data: {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle?: string;
  message: string;
}) {
  const html = `
    <h2>New Contact Form Submission</h2>
    <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
      <tr><td style="padding: 8px; font-weight: bold;">Name</td><td style="padding: 8px;">${data.firstName} ${data.lastName}</td></tr>
      <tr><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;">${data.email}</td></tr>
      <tr><td style="padding: 8px; font-weight: bold;">Company</td><td style="padding: 8px;">${data.company}</td></tr>
      ${data.jobTitle ? `<tr><td style="padding: 8px; font-weight: bold;">Job Title</td><td style="padding: 8px;">${data.jobTitle}</td></tr>` : ""}
      <tr><td style="padding: 8px; font-weight: bold;">Message</td><td style="padding: 8px;">${data.message}</td></tr>
    </table>
  `;

  return sendEmail({
    to: TEAM_EMAIL,
    subject: `[ParityScope] Contact from ${data.firstName} ${data.lastName} at ${data.company}`,
    html,
    replyTo: data.email,
  });
}

export async function sendDemoRequestNotification(data: {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  companySize: string;
  useCase: string;
  regulations?: string[];
}) {
  const html = `
    <h2>New Demo Request</h2>
    <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
      <tr><td style="padding: 8px; font-weight: bold;">Name</td><td style="padding: 8px;">${data.firstName} ${data.lastName}</td></tr>
      <tr><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;">${data.email}</td></tr>
      <tr><td style="padding: 8px; font-weight: bold;">Company</td><td style="padding: 8px;">${data.company}</td></tr>
      <tr><td style="padding: 8px; font-weight: bold;">Job Title</td><td style="padding: 8px;">${data.jobTitle}</td></tr>
      <tr><td style="padding: 8px; font-weight: bold;">Company Size</td><td style="padding: 8px;">${data.companySize}</td></tr>
      <tr><td style="padding: 8px; font-weight: bold;">Use Case</td><td style="padding: 8px;">${data.useCase}</td></tr>
      ${data.regulations?.length ? `<tr><td style="padding: 8px; font-weight: bold;">Regulations</td><td style="padding: 8px;">${data.regulations.join(", ")}</td></tr>` : ""}
    </table>
  `;

  return sendEmail({
    to: TEAM_EMAIL,
    subject: `[ParityScope] Demo Request from ${data.firstName} ${data.lastName} at ${data.company}`,
    html,
    replyTo: data.email,
  });
}

export async function sendDemoConfirmation(data: {
  firstName: string;
  email: string;
}) {
  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0B1D3A;">Thanks for your interest, ${data.firstName}!</h2>
      <p>We received your demo request and a member of our team will reach out within 1 business day to schedule a personalized walkthrough of ParityScope.</p>
      <p>In the meantime, you might find these resources helpful:</p>
      <ul>
        <li><a href="https://parityscope.com/product" style="color: #0EA5A0;">Product Overview</a></li>
        <li><a href="https://parityscope.com/regulations/eu-ai-act" style="color: #0EA5A0;">EU AI Act Compliance Guide</a></li>
        <li><a href="https://parityscope.com/resources/blog" style="color: #0EA5A0;">Latest Blog Posts</a></li>
      </ul>
      <p style="color: #64748B; font-size: 14px;">The ParityScope Team</p>
    </div>
  `;

  return sendEmail({
    to: data.email,
    subject: "Your ParityScope Demo Request — We'll Be in Touch!",
    html,
  });
}

export async function addNewsletterSubscriber(email: string) {
  const html = `
    <h2>New Newsletter Subscriber</h2>
    <p><strong>Email:</strong> ${email}</p>
  `;

  return sendEmail({
    to: TEAM_EMAIL,
    subject: `[ParityScope] New Newsletter Subscriber: ${email}`,
    html,
  });
}
