import { redirect } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async (event) => {
  const session = event.cookies.get("sessionID")
  if (session) {
    throw redirect(301, `/${parseJwt(String(session)).username}`)
  }
}

function parseJwt (token: string) {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}
