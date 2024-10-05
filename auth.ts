import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import User from "@/lib/models/user";
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

        // Return user object without sensitive data
        return { id: user._id, email: user.email, image: user.image }; 
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 3 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex");
    },
  },
  callbacks: {
    async jwt({ token, user }) {
      // Include user data in the token when the user logs in
      if (user) {
        token._id = user.id; // Add user ID
        token.email = user.email; // Add email
        token.image = user.image; // Add other fields as necessary
      }
      return token;
    },
    async session({ session, token }) {
      // Add token properties to the session
      session.user._id = token._id; 
      session.user.email = token.email;
      session.user.image = token.image; // Include any other fields
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, 
};

export default NextAuth(authOptions);