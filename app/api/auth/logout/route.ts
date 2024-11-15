import { API_BASE_URL } from "app/constants";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const authheader = request.headers.get('authorization');
  return await fetch(`${API_BASE_URL}/auth/logout`, {
    headers: {
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'GET,DELETE,POST,PUT',
      'Content-Type': 'application/json',
      'Authorization': authheader ?? ''
    },
    method: 'POST',
  });
}