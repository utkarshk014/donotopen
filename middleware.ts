import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("love_access_token");

    // Protect /collections and any sub-routes
    if (!token) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/main/:path*",
        "/collections/:path*",
        "/ootd",
        "/trial-room",
        "/diva",
        "/special",
        "/us",
    ],
};
