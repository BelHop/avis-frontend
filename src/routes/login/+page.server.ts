import type { Actions } from './$types';
import { redirect } from "@sveltejs/kit"
import type { PageServerLoad } from "../login/$types"

import { SIGNIN_URL } from '$env/static/private'

export const load: PageServerLoad = async (event) => {
  const session = event.cookies.get("sessionID")
  if (session) {
    throw redirect(301, `/${parseJwt(String(session)).username}`)
  }
}

function parseJwt (token: string) {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}

export const actions: Actions = {
  default: async (event) => {
    const data = await event.request.formData();
    let response = await fetch(`${SIGNIN_URL}`, {      
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        username: data.get("username"),
        password: data.get("password")
      }),
    })

    if (response.ok) {
      const auth = response.headers.get("Authorization");
      event.cookies.set("sessionID", `Bearer ${auth}`, {
        path: "/",
        maxAge: 3600
      });
    }
  }
}
