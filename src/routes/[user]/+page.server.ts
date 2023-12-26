import type { PageServerLoad } from "./$types"
import type { Actions } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
  const response = await fetch(`http://localhost:3000/find/${params.user}`)

  let data = await response.json()
  let notes = JSON.stringify(data)
  let parsed = JSON.parse(notes)
  return {
    notes: parsed,
    user: params.user
  }
}

export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    fetch("http://localhost:3000/new", {      
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        title: Sanitize(String(data.get("title"))),
        description: data.get("description"),
        user: parseJwt(String(cookies.get("sessionID"))).username
      }),
    })
  }
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

