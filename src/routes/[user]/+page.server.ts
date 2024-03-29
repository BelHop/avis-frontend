import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types"
import type { Actions } from './$types';

import { NOTES_API_URL } from '$env/static/private'

export const load: PageServerLoad = async ({ fetch, params, cookies }) => {
  const response = await fetch(`http://localhost:3000/find/${params.user}`, {
    method: 'GET',
    headers: {
      'Authorization': `${cookies.get("sessionID")}`
    }
  })

  let data = await response.json()
  let notes = JSON.stringify(data)
  let parsed = JSON.parse(notes)
  return {
    notes: parsed,
    user: params.user,
    cookieVal: cookies.get("sessionID")
  }
}

export const actions: Actions = {
  Create: async ({ request, cookies }) => {
    const data = await request.formData();
    fetch(`${NOTES_API_URL}/new`, {      
      method: 'POST',
      credentials: 'include',
      headers: {
        'Authorization': `${cookies.get("sessionID")}`
      },
      body: JSON.stringify({
        title: Sanitize(String(data.get("title"))),
        description: data.get("description"),
        user: parseJwt(String(cookies.get("sessionID"))).username
      }),
    })
  },

  Logout: async ({ cookies }) => {
    cookies.set('sessionID', '', {
      path: '/',
      expires: new Date(0),
    })

    throw redirect(302, '/')
  },
}

function parseJwt (token: string) {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}

function Sanitize(str: String): String {
  const map: Record<string, string> = {
      '<': '',
      '>': '',
      '"': '',
      "'": '',
      "`": '',
      "?": '',
  };
  const reg = /[&<>"'/`?]/ig;
  return str.replace(reg, (match)=>(map[match]));
}

