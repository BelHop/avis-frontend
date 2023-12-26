import { redirect } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async (event) => {
  if (typeof window != 'undefined') {
    const sessionID = event.cookies.get("sessionID")
    if (sessionID) {
      throw redirect(301, `/${parseJwt(sessionID).username}`)
    }
  }
}

function parseJwt (token: string) {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}
