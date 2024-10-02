import User from "@/lib/models/user";
import { connectDB } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
  
  export async function OPTIONS() {
    return NextResponse.json({}, { headers: corsHeaders });
  }

export const POST = async (req : NextRequest, res : NextResponse)  => {
    try {
     const { email, password } = await  req.json();
     await connectDB();
     const userFound = await User.findOne({ email });
     if(userFound){
         return {
             error: 'Email already exists!'
         }
     }
     const hashedPassword = await bcrypt.hash(password, 10);
     const user = new User({
       email,
       password: hashedPassword,
     });
     const savedUser = await user.save();
     return NextResponse.json({ user: savedUser }, { status: 200 });
    }
    catch (err) {
     console.log("err",err)
    }
 }