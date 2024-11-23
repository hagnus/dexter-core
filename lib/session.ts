import { ACCESS_DURATION, SESSION_DURATION } from "app/constants";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

enum SESSION {
  SESSION_NAME = 'dexter_session',
  ACCESS_NAME = 'dexter_access'
}

export function createCookie(type: SESSION, token: string): ResponseCookie {
  const cookie: ResponseCookie = {
    name: type === SESSION.SESSION_NAME ? SESSION.SESSION_NAME : SESSION.ACCESS_NAME,
    value: token,
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: type === SESSION.SESSION_NAME ? SESSION_DURATION : ACCESS_DURATION
  }

  // if (type === SESSION.SESSION_NAME) {
  //   cookie.path = '/login'
  // }

  return cookie;
}

export async function createSession(accessToken: string, sessionToken: string) {
  const cookieStore = await cookies();

  cookieStore.set(createCookie(SESSION.SESSION_NAME, sessionToken));
  cookieStore.set(createCookie(SESSION.ACCESS_NAME, accessToken));
}

export async function deleteSession() {
  const cookieStore = await cookies();
  console.log('COOKIES 1', cookieStore);

  cookieStore.delete(SESSION.SESSION_NAME);
  cookieStore.delete(SESSION.ACCESS_NAME);

  console.log('COOKIES 2', cookieStore);
}

export async function getSession() {
  const cookieStore = await cookies();

  return cookieStore.get(SESSION.SESSION_NAME);
}