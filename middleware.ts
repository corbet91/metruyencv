import { withAuth } from "next-auth/middleware";
import { NextResponse } from 'next/server';

export default withAuth(
    function middleware(req) {
        if (!req.nextauth.token) {
            console.log("req.nextauth.token", req.nextauth.token)
            return NextResponse.redirect(new URL('/support', req.url));
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => {
                console.log("req.nextauth.token", token)
                return true;
            },
        },
    }
);

export const config = { matcher: ["/account/:path*"] };