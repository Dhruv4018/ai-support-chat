import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/getSession";

// In Next.js 16.2+, this is named proxy.ts and the function is named proxy
export async function proxy(req: NextRequest) {
    const session = await getSession()
    if (!session) {
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL!}`)
    }

    return NextResponse.next()
}

export const config = {
    // Match /dashboard and all its sub-paths
    matcher: '/dashboard/:path*'
}