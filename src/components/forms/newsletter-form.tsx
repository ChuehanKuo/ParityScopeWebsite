"use client";

import { useActionState } from "react";
import { submitNewsletter, type ActionResult } from "@/lib/actions";

const initialState: ActionResult | null = null;

export function NewsletterForm() {
  const [state, formAction, isPending] = useActionState(
    submitNewsletter,
    initialState
  );

  if (state?.success) {
    return (
      <p className="text-body-sm text-green">{state.message}</p>
    );
  }

  return (
    <form action={formAction} className="flex gap-2">
      <input
        name="email"
        type="email"
        required
        placeholder="you@company.com"
        className="flex-1 rounded-full border border-light-gray bg-white px-4 py-2 text-body-sm text-near-black focus:border-teal focus:outline-none"
      />
      <button
        type="submit"
        disabled={isPending}
        className="rounded-full bg-teal px-6 py-2 text-body-sm font-semibold text-white transition-colors hover:bg-teal-dark disabled:opacity-50"
      >
        {isPending ? "..." : "Subscribe"}
      </button>
      {state?.message && !state.success && (
        <p className="text-caption text-coral">{state.message}</p>
      )}
    </form>
  );
}
