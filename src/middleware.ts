import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/getSession";

// ✅ FIX 8: Must be named `middleware` for Next.js to recognise it
export async function middleware(req: NextRequest) {
    const session = await getSession()
    if (!session) {
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL!}`)
    }

    return NextResponse.next()
}

export const config = {
    // ✅ FIX: :path* (with *) to match /dashboard AND all sub-paths
    matcher: '/dashboard/:path*'
}