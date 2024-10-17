import { Status } from "@/enum/ticket";
import Ticket from "@/lib/models/ticket";
import { connectDB } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { userId, title, report, content } = await req.json();

    await connectDB();

    const ticket = new Ticket({
      userId: userId,
      title: title,
      report: report,
      content: content,
      open: Status.open,
    });

    const savedticket = await ticket.save();

    return NextResponse.json({ ticket: savedticket }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
};
