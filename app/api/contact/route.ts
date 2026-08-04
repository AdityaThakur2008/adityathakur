import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import ContactEmail from "@/app/emails/ContactEmail";
import { ContactSchema } from "@/app/validation/contact";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = ContactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten(),
        },
        {
          status: 400,
        },
      );
    }

    const { name, email, subject, message } = result.data;

    const { error } = await resend.emails.send({
      from: "Aditya Thakur <hello@adityathakur.co.in>",
      to: process.env.CONTACT_EMAIL as string,
      replyTo: email,
      subject: `📩 ${subject}`,
      react: ContactEmail({
        name,
        email,
        subject,
        message,
      }),
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send email.",
        },
        {
          status: 500,
        },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error.",
      },
      {
        status: 500,
      },
    );
  }
}
