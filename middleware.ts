'use-server'
import { getSession } from 'next-auth/react';
import { NextResponse } from 'next/server';

export async function middleware(req) {
    const session = await getSession({ req });

    // Define the paths that require authentication
    const protectedPaths = ['/account', '/dashboard'];
    console.log("session", session)
    // Check if the request is for a protected path
    if (protectedPaths.some(path => req.nextUrl.pathname.startsWith(path))) {
        if (!session?.user) {
            return NextResponse.redirect(new URL('/support', req.url));
        }
        return NextResponse.next();
    }
}

// Define the matcher for the middleware
export const config = {
    matcher: ['/account/:path*'], // Apply middleware to these paths
};