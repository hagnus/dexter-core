import { API_BASE_URL } from "app/constants";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'GET,DELETE,POST,PUT',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      email,
      password
    }),
  });

  return response
}