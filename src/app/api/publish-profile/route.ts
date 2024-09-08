// app/api/publish-profile/route.ts
import { NextResponse } from "next/server";
import prisma from "@/app/db";

export async function POST(request: Request) {
  const { userId } = await request.json();

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // In this approach, we don't need to update anything in the database
    // We're just confirming that the user exists

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error publishing profile:", error);
    return NextResponse.json(
      { error: "Failed to publish profile" },
      { status: 500 }
    );
  }
}
