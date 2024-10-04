import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb"; // Đường dẫn đến hàm kết nối DB
import User from "@/lib/models/user"; // Đường dẫn đến model User
import { randomBytes, randomUUID } from "crypto";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();
        const user = await User.findOne({
          email: credentials?.email,
        }).select("+password");

        if (!user) throw new Error("Wrong Email");

        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          user.password
        );

        if (!passwordMatch) throw new Error("Wrong Password");
        return user; // Trả về user để thêm vào token
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 3 * 24 * 60 * 60, // 3 days in seconds
    updateAge: 24 * 60 * 60,
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex")
    }
  },
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      return token
    },
    async session({ session, token }) {
      // Gán thông tin từ token vào session
      session.user.id = token.id; // Gán ID người dùng
      session.user.email = token.email; // Gán email người dùng
      // Thêm bất kỳ thông tin nào khác bạn cần
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Đảm bảo rằng bạn đã thiết lập NEXTAUTH_SECRET
};

export default NextAuth(authOptions);