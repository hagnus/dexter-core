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
    maxAge: type === SESSION.SESSION_NAME ? 2592000000 : 900000 // 15min
  }

  // if (type === SESSION.SESSION_NAME) {
  //   cookie.path = '/login'
  // }

  return cookie;
}

export async function createSession(accessToken: string, sessionToken: string) {
  const cookieStore = await cookies();

  cookieStore.set(createCookie(SESSION.SESSION_NAME, accessToken));
  cookieStore.set(createCookie(SESSION.ACCESS_NAME, sessionToken));
}

export async function deleteSession() {
  const cookieStore = await cookies();

  cookieStore.delete(SESSION.SESSION_NAME);
  cookieStore.delete(SESSION.ACCESS_NAME);
}