import { NextResponse } from "next/server";

export function middleware(request) {
  return NextResponse.redirect(new URL('/about'),request.url)
}

export config = {
  matcher:['/account', '/cabins']
}