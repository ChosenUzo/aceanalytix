import { NextResponse } from "next/server";

/**
 * Contact endpoint. Validates input and currently logs the submission.
 *
 * TO GO LIVE: connect an email service. Example with Resend:
 *   1. npm i resend
 *   2. set RESEND_API_KEY in your environment
 *   3. replace the console.log below with:
 *      await resend.emails.send({ from, to: "info@aceanalytix.com", subject, text })
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }
    if (typeof email !== "string" || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    // Replace with real delivery (see note above).
    console.log("[contact] new enquiry", {
      name,
      email,
      organisation: body.organisation ?? "",
      role: body.role ?? "",
      message,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
