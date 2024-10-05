import User from "@/lib/models/user";
import { connectDB } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

// Define the type for the request
export const GET = async (req : NextRequest): Promise<NextResponse> => {
  try {
    // Extract the user ID from the URL query parameters
    const url = req.url.match(/\/(\w+)$/);
     if (url) {
       const id = url[1];
       if (!id) {
        return NextResponse.json({ error: "User ID is required" }, { status: 400 });
      }
 
      await connectDB();
      const user = await User.findById(id);
 
      if (!user) {
        return NextResponse.json({ error: "Not Found" }, { status: 404 });
      }
 
     return NextResponse.json({ data: user }, { status: 200 });
     }
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};