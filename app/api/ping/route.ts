import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (error) {
    console.error("Error executing query:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
