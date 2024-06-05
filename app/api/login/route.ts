import { NextRequest, NextResponse } from "next/server";
import { AuthError } from "next-auth";
import { signIn } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const body = await request.json();
  try {
    await signIn("credentials", { body });

    return NextResponse.json({ message: "Succes", success: true });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return NextResponse.json({
            message: "Identifiants invalides",
            success: false,
          });
        default:
          return NextResponse.json({
            message: "Quelque chose s'est mal passee",
            success: false,
          });
      }
    }
    return NextResponse.json({
      message: "Quelque chose s'est mal passee",
      success: false,
    });
  }
}
