import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ fetch, params }) => {
  const response = await fetch(`http://localhost:3000/find/${params.user}/${params.slug}`)

  let data = await response.json()
  const note = JSON.stringify(data)
  const parsed = JSON.parse(note)

  return {
    note: parsed, 
  }
}

