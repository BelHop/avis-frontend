
import { redirect, type Actions } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ fetch, params, cookies }) => {
  const response = await fetch(`http://localhost:3000/find/${params.user}/${params.slug}`, {
    method: 'GET',
    headers: {
      'Authorization': `${cookies.get("sessionID")}`
    }
  })

  let data = await response.json()
  const note = JSON.stringify(data)
  const parsed = JSON.parse(note)

  return {
    note: parsed, 
    cookie: cookies.get("sessionID")
  }
}

export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    fetch(`http://localhost:3000/update/${parseJwt(String(cookies.get("sessionID"))).username}/${data.get("title")}`, {
      method: 'PUT',
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
    throw redirect(302, `/${parseJwt(String(cookies.get("sessionID"))).username}`) 
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
