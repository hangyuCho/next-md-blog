import Mdx from "@/components/Mdx"
import { allDocs } from "contentlayer/generated"
import { notFound } from "next/navigation"
import Link from "next/link"

interface PageProps {
  params: {
    slug: string
  }
}

const getDocFromParams = async(slug: string) => {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)
  if (!doc) notFound()
  return doc
}

const page = async ({params}: PageProps) => {
  const doc = await getDocFromParams(params.slug)
  return (
    <div>
      <Link className="px-2" href={"/"}>👈 Home</Link>
      <Mdx code={doc.body.code} />
    </div>
  )
}

export default page
