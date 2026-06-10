import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, string | undefined>;

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json(
      {
        message: "Please complete your name, email, and message before sending.",
      },
      { status: 400 },
    );
  }

  return NextResponse.json({
    message:
      "Thank you for reaching out. Our team will respond within one business day.",
  });
}
