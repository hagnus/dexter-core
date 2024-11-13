'use server'
import { LoginInput, LoginOutput } from '@public/login/definitions';
import { redirect } from 'next/navigation';
import { loginRequest } from '@public/login/services';
import { createSession } from '@lib/session';

function AuthenticationError(message: string, type: string) {
  return {
    error: { type, message }
  }
}

export async function login(data: LoginInput): Promise<LoginOutput> {
  const response = await loginRequest(data);

  if (!response.ok) {
    if(response.status === 401) {
      return AuthenticationError(response.statusText, 'Invalid login credentials');
    }

    return AuthenticationError(response.statusText, 'Login request failed');
  }

  const { accessToken, sessionToken } = await response.json();
  try {
    createSession(accessToken, sessionToken);
  } catch {
    return AuthenticationError('Session', 'Login request failed');
  }
  
  if (response.ok) {
    redirect('/dashboard');
  }
}