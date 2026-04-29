import { scalekit } from "@/lib/scalekit";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const code = searchParams.get("code")
    const redirectUri = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`

    if (!code) {
        return NextResponse.json({ message: "code is not found" }, { status: 400 })

    }

    const session = await scalekit.authenticateWithCode(code, redirectUri)
    const response = NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}`)
    response.cookies.set("access_token", session.accessToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60, // ✅ seconds mein — 1 din = 86400 seconds
        secure: true,
        path: "/"

    })

    return response

}