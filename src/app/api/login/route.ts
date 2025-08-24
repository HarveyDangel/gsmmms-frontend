'use server';

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const laravelRes = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await laravelRes.json();

    return NextResponse.json(data, { status: laravelRes.status });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Proxy Error", error: error.message },
      { status: 500 }
    );
  }
}
