import Mdx from "@/components/Mdx"
import { allDocs, Doc } from "contentlayer/generated"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { format, parseISO } from 'date-fns'

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
    <div className={`bg-white w-[375px] flex flex-col gap-2  h-screen text-sm`}>
      <div className="relative flex justify-center text-white bg-gray-900 h-[18rem]">
        <Image className="object-cover w-screen h-[18rem] m-0 opacity-20" src={doc.cover} alt="" priority={false} loading="lazy" width={1920} height={300} quality={100} />
        <div className="absolute top-0 flex flex-col w-full h-full gap-8">
          <Link className="flex px-2 text-white justify-self-start" href={"/"}>👈 Home</Link>
          <div className="flex flex-col items-center justify-center gap-4 text-white">
            <div className="px-2 py-1 text-lg bg-indigo-800 rounded-lg">
              태그
            </div>
            <div className="text-lg">
              {doc.title}
            </div>
            <div className="flex items-center gap-2 text-xs text-white">
              <Image className="rounded-2xl" src={`/content/blog/image/profile.png`} alt={"image"} width={30} height={30} />
              <span>하나마루</span>
              { doc.createdAt ? <span>|</span> : null}
              <time dateTime={doc.body.code} className="block text-xs">
                {doc.createdAt ? format(parseISO(doc.createdAt), 'yyyy. MM. d') : null}
              </time>
            </div>
            <p className="mt-2 text-lg font-bold text-indigo-500">Scroll Down👇</p>
          </div>
        </div>
      </div>
      <Mdx code={doc.body.code} />
    </div>
  )
}

export default page
