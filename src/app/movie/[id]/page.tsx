// app/movie/[id]/page.tsx

import Main from "@/components/MovieDetails/main"

type PageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function Details({ params }: PageProps) {
  const { id } = await params

  console.log("ID:", id) 

  return <Main id={Number(id)} />
}
