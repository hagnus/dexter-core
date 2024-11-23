'use server'
import { RegistrationFields, RegistrationFormReturn } from '@components/AccessForms/definitions';
import { redirect } from 'next/navigation';
import { registrationRequest } from '@public/register/services';
import { createSession } from '@lib/session';

function RegistrationError(message: string, type: string) {
  return {
    error: { type, message }
  }
}

export async function register(data: RegistrationFields): Promise<RegistrationFormReturn> {
  const response = await registrationRequest(data);

  if (!response.ok) {
    if(response.status === 401) {
      return RegistrationError(response.statusText, 'Invalid login credentials');
    }

    return RegistrationError(response.statusText, 'Login request failed');
  }

  const { accessToken, sessionToken } = await response.json();
  try {
    createSession(accessToken, sessionToken);
  } catch {
    return RegistrationError('Session', 'Login request failed');
  }
  
  if (response.ok) {
    redirect('/product-maker');
  }
}