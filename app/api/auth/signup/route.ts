import User from "@/lib/models/user";
import { connectDB } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (req: NextRequest) => {
  try {
    const { email, password } = await req.json();
     console.log("req",email)

    await connectDB();
    
    const userFound = await User.findOne({ email });
    if (userFound) {
      return NextResponse.json({ error: 'Email already exists!' }, { status: 400 });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = new User({
      email,
      password: hashedPassword,
    });
    
    const savedUser = await user.save();
    
    return NextResponse.json({ user: savedUser }, { status: 201 });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({ error: 'An error occurred while registering the user.' }, { status: 500 });
  }
};