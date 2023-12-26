import { redirect } from "@sveltejs/kit"
import type { PageServerLoad } from "../[user]/$types"


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
    username: param.user
  }
}

function parseJwt (token: string) {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}
