import { API_BASE_URL } from "app/constants";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { email, password, userName } = await request.json();
  return await fetch(`${API_BASE_URL}/auth/register`, {
    headers: {
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'GET,DELETE,POST,PUT',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      userName
    }),
  });
}