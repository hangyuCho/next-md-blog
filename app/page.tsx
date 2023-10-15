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
  const docs = allDocs

  return (
    <div className="bg-white w-[24rem] flex flex-col gap-4">
      <div className="relative h-screen">
        <div>
          <Image className="object-cover h-screen opacity-90" src={Cover.src} alt="" priority={false} loading="lazy" sizes="384px" fill quality={50} />
        </div>
        <div className="font-['SUITE-Regular'] text-center text-2xl font-black absolute top-0 w-full pt-12 z-10">
            <div className="flex flex-col justify-center items-center">
              <div className="relative flex justify-center items-center w-32 border-2 border-indigo-200 px-4 py-1 rounded-lg text-indigo-200 text-base after:content-['▼'] after:absolute after:bottom-[-0.9rem] after:text-xs">
                <p>Let&apos;s enjoy</p>
              </div>
              <div className="mt-10 text-white text-lg">
                <p>작고 간단하지만 기능성이 있는 것을 만들고 있습니다</p>
                
                <p>이 작은 것들을 조금씩 합쳐가면서 좋은 것을 만들어 보고 싶습니다</p>
              </div>
            </div>
        </div>
      </div>
      <div className="bg-white">
        {docs.filter((doc: Doc) => doc.published).map((doc: Doc, i: number) => (
          <DocCard key={i} {...doc} />
        ))}
      </div>
    </div>
  )
}
