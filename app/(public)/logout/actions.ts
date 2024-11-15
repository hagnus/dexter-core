'use server'
import { deleteSession, getSession } from 'lib/session'
import { redirect } from 'next/navigation'
import { logoutRequest } from 'app/(public)/logout/services';

export async function logout() {
  const session = await getSession();
  if (!session) {
    redirect('/login');
  }
  const response = await logoutRequest(session);

  if (response.ok && response.status === 200) {
    deleteSession();

    redirect('/login');
  } else {
    redirect('/error');
  }
}