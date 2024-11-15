'use server'
import { getSession } from "@lib/session";
import { NEXT_PUBLIC_BASE_URL } from "app/constants";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export async function logoutRequest({ value }: RequestCookie) {
  const response = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/auth/logout`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': value
    }
  });

  return response;
}