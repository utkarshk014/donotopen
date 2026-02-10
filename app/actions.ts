"use server";

import { cookies } from "next/headers";

export async function login(password: string) {
    if (password.trim().toLowerCase() === "tanmay") {
        const cookieStore = await cookies();
        cookieStore.set("love_access_token", "true", {
            maxAge: 1800, // 30 minutes in seconds
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
        });
        return { success: true };
    }
    return { success: false };
}
