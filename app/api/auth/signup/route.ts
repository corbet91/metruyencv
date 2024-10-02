import User from "@/lib/models/user";
import { connectDB } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (req: NextRequest) => {
  try {
    const { email, password } = await req.json();
    
    // Kết nối đến cơ sở dữ liệu
    await connectDB();
    
    // Kiểm tra xem email đã tồn tại chưa
    const userFound = await User.findOne({ email });
    if (userFound) {
      return NextResponse.json({ error: 'Email already exists!' }, { status: 400 });
    }
    
    // Mã hóa mật khẩu
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Tạo người dùng mới
    const user = new User({
      email,
      password: hashedPassword,
    });
    
    // Lưu người dùng vào cơ sở dữ liệu
    const savedUser = await user.save();
    
    // Trả về thông tin người dùng đã lưu
    return NextResponse.json({ user: savedUser }, { status: 201 });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({ error: 'An error occurred while registering the user.' }, { status: 500 });
  }
};