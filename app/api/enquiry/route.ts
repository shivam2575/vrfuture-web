import { formSchema } from "@/lib/exquirySchema";
import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const from = process.env.EMAIL_FROM || "VRFUTURE <onboarding@resend.dev>";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = formSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid Input", issues: parsed.error.flatten() },
        { status: 400 },
      );
    }
    if (parsed.data.company?.trim()) {
      return NextResponse.json({ success: true }, { status: 201 });
    }
    const client = await clientPromise;
    const db = client.db("vrfuture-enquiry");
    const result = await db.collection("enquiries").insertOne({
      ...parsed.data,
      createdAt: new Date(),
    });

    //send email notification
    try {
      const { data, error } = await resend.emails.send({
        from,
        to: [`${process.env.EMAIL_TO}`],
        subject: `New Enquiry From ${parsed.data.name}`,
        html: `<h1>VR Future Enquiry</h1>
      <div><p>Name: ${parsed.data.name}</p> <p>Phone: ${parsed.data.phone}</p> <p>Class: ${parsed.data.class}</p> <p>Board: ${parsed.data.board}</p> <p>Message: ${parsed.data.message}</p></div>`,
        text: `Name:${parsed.data.name}
        Phone:${parsed.data.phone}
        Class:${parsed.data.class}
        Board:${parsed.data.board}
        Message:${parsed.data.message}`,
      });

      if (error) {
        throw new Error(`Error while sending mail: ${error.message}`);
      }

      console.log("Email sent succesfully..!!");
      console.log("Email sent from id:", data?.id);
    } catch (err) {
      console.log("error while sending mail", err);
    }

    return NextResponse.json(
      { success: true, id: result.insertedId },
      { status: 201 },
    );
  } catch (err) {
    console.error("Enquiry error", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
