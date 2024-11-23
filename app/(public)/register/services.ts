import { RegistrationFields } from "@components/AccessForms/definitions";
import { NEXT_PUBLIC_BASE_URL } from "app/constants";

export async function registrationRequest(data: RegistrationFields) {
  const response = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  return response
}