import { NextResponse } from "next/server";
import { demoRequestSchema } from "@/lib/validations";
import { sendDemoRequestNotification, sendDemoConfirmation } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = demoRequestSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.issues },
        { status: 400 }
      );
    }

    const data = result.data;

    // Send notification to team and confirmation to user in parallel
    await Promise.all([
      sendDemoRequestNotification(data),
      sendDemoConfirmation({ firstName: data.firstName, email: data.email }),
    ]);

    return NextResponse.json(
      { success: true, message: "Demo request submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("[API] Demo request error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
