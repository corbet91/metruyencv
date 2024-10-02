"use server"
import User from "@/lib/models/user";
import { connectDB } from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export const register = async (values: any) => {
    const { email, password } = values;

    try {
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
        return savedUser

    }catch(e){
        console.log(e);
    }
}