import { NEXT_PUBLIC_BASE_URL } from "app/constants";
import { LoginInput } from "@public/login/definitions";

export async function loginRequest(data: LoginInput) {
  const response = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  return response
}