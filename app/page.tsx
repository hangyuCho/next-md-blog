// app/page.tsx
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allDocs, Doc } from 'contentlayer/generated'
import Image from 'next/image'
import Cover from "public/cover.gif"

function DocCard(doc: Doc) {
  return (
    <Link href={doc.slug} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:mb-5 duratoin-300">
      <div className="mb-8 flex text-lg px-2">
        <div className="w-3/4">
          <h2 className="mb-1 text-lg font-bold">
              {doc.title}
          </h2>
          <div>
            <p className="mb-1">{doc.description}</p>
          </div>
          <div className="flex text-sm items-center gap-2">
            <Image className="rounded-2xl" src={`/content/blog/image/profile.png`} alt={"image"} width={30} height={30} />
            <span className="text-xs text-gray-600">하나마루</span>
            { doc.createdAt ? <span className="text-xs text-gray-600">|</span> : null}
            <time dateTime={doc.body.code} className="block text-xs text-gray-600">
              {doc.createdAt ? format(parseISO(doc.createdAt), 'yyyy. MM. d') : null}
            </time>
          </div>
        </div>
        <div className="w-1/4 flex items-center justify-center">
          <Image className="rounded-md w-24 h-24" src={`https://loremflickr.com/320/240/space`} alt={"image"} width={100} height={100} />
        </div>
      </div>
    </Link>
  )
}

export default function Home() {
  const docs = allDocs.sort((a: any, b: any) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="bg-white w-[24rem] flex flex-col gap-4">
      <div className="relative h-screen">
        <div>
          <Image className="object-cover h-screen" src={Cover.src} alt="" priority={false} loading="lazy" sizes="384px" fill quality={50} />
        </div>
        <h1 className="text-center text-2xl font-black absolute top-0 w-full pt-12">
            <div className="flex justify-center">
              <div className="w-2/3 border-2 border-indigo-200 px-1 py-2 rounded-md text-indigo-200">
                <p>Let&apos;s Enjoy</p>
              </div>
            </div>
        </h1>
      </div>
      <div className="bg-white">
        {docs.filter((doc: Doc) => doc.published).map((doc: Doc, i: number) => (
          <DocCard key={i} {...doc} />
        ))}
      </div>
    </div>
  )
}
