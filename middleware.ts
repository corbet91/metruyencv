import { withAuth } from "next-auth/middleware";
import { NextResponse } from 'next/server';

export default withAuth(
    function middleware(req) {
        if (!req.nextauth.token) {
            return NextResponse.redirect(new URL('/support', req.url));
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => {
                return true;
            },
        },
    }
);

export const config = { matcher: ["/account/:path*"] };