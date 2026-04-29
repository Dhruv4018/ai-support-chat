import connectDb from "@/lib/db";
import Settings from "@/model/setting.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { ownerId, businessName, supportEmail, knowledge } = await req.json();
       
        if (!ownerId) {
            return NextResponse.json(
                { message: "owner id is required" },
                { status: 400 }
            );
        }

        await connectDb();

        const settings = await Settings.findOneAndUpdate(
            { ownerId },
            { ownerId, businessName, supportEmail, knowledge },
            { new: true, upsert: true }
        );

        return NextResponse.json(settings);

    } catch (error) {
        return NextResponse.json(
            { message: "settings error", error },
            { status: 500 }
        );
    }
}