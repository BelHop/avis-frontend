import { redirect, type Actions } from "@sveltejs/kit"
import type { PageServerLoad } from "../$types"
import { UPDATE_USER } from '$env/static/private'

export const load: PageServerLoad = async (event: any) => {
  const param = JSON.parse(JSON.stringify(event.params))
  const sessionID = event.cookies.get("sessionID")
  if (!sessionID) {
    throw redirect(301, "/login")
  }
  if (parseJwt(sessionID).username != param.user) {
    throw redirect(301, `/${parseJwt(sessionID).username}`)
  }

  return {
    username: param.user,
    password: parseJwt(sessionID).password,
    cookie: event.cookies.get("sessionID"),
  }
}

export const actions: Actions = {
  Save: async ({ request, cookies }) => {
    const data = await request.formData();
    fetch(`${UPDATE_USER}`, {
      method: 'PUT',
      credentials: 'include',      
      // headers: {
      //   'Authorization': `${cookies.get("sessionID")}`
      // },
      body: JSON.stringify({
        username: Sanitize(String(data.get("username"))),
        password: data.get("password"),
        user: parseJwt(String(cookies.get("sessionID"))).username
      }),
    })
    throw redirect(302, `/${parseJwt(String(cookies.get("sessionID"))).username}`) 
  },
}

function parseJwt (token: string) {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}
