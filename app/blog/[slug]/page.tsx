import Mdx from "@/components/Mdx"
import { allDocs, Doc } from "contentlayer/generated"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

interface PageProps {
  params: {
    slug: string
  }
}

const getDocFromParams = async(slug: string) => {
  const doc = allDocs.find((doc: Doc) => doc.slugAsParams === slug)
  if (!doc) notFound()
  return doc
}

const page = async ({params}: PageProps) => {
  const doc = await getDocFromParams(params.slug)
  return (
    <div className={`bg-white w-[375px] flex flex-col gap-2  h-full text-sm`}>
      <Link className="px-2" href={"/"}>👈 Home</Link>
      <Image className="relative w-screen object-cover m-0 h-42" src={doc.bg} alt="" sizes="100vw" width={0} height={0} />
      <Mdx code={doc.body.code} />
    </div>
  )
}

export default page
