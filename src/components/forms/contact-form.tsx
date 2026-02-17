"use client";

import { useActionState } from "react";
import { submitContactForm, type ActionResult } from "@/lib/actions";

const initialState: ActionResult | null = null;

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  if (state?.success) {
    return (
      <div className="rounded-lg bg-green/10 p-6 text-center">
        <p className="text-h4 font-semibold text-green">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state?.message && !state.success && (
        <div className="rounded-lg bg-coral/10 p-4">
          <p className="text-body-sm text-coral">{state.message}</p>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="mb-1 block text-body-sm font-medium text-navy"
          >
            First Name *
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="w-full rounded-lg border border-light-gray px-4 py-2.5 text-body text-near-black transition-colors focus:border-teal focus:outline-none"
          />
          {state?.errors?.firstName && (
            <p className="mt-1 text-caption text-coral">
              {state.errors.firstName[0]}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="mb-1 block text-body-sm font-medium text-navy"
          >
            Last Name *
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            className="w-full rounded-lg border border-light-gray px-4 py-2.5 text-body text-near-black transition-colors focus:border-teal focus:outline-none"
          />
          {state?.errors?.lastName && (
            <p className="mt-1 text-caption text-coral">
              {state.errors.lastName[0]}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1 block text-body-sm font-medium text-navy"
        >
          Work Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-light-gray px-4 py-2.5 text-body text-near-black transition-colors focus:border-teal focus:outline-none"
        />
        {state?.errors?.email && (
          <p className="mt-1 text-caption text-coral">
            {state.errors.email[0]}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="company"
          className="mb-1 block text-body-sm font-medium text-navy"
        >
          Company *
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          className="w-full rounded-lg border border-light-gray px-4 py-2.5 text-body text-near-black transition-colors focus:border-teal focus:outline-none"
        />
        {state?.errors?.company && (
          <p className="mt-1 text-caption text-coral">
            {state.errors.company[0]}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="jobTitle"
          className="mb-1 block text-body-sm font-medium text-navy"
        >
          Job Title
        </label>
        <input
          id="jobTitle"
          name="jobTitle"
          type="text"
          className="w-full rounded-lg border border-light-gray px-4 py-2.5 text-body text-near-black transition-colors focus:border-teal focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1 block text-body-sm font-medium text-navy"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full rounded-lg border border-light-gray px-4 py-2.5 text-body text-near-black transition-colors focus:border-teal focus:outline-none"
          placeholder="Tell us about your AI fairness needs..."
        />
        {state?.errors?.message && (
          <p className="mt-1 text-caption text-coral">
            {state.errors.message[0]}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-full bg-teal px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
