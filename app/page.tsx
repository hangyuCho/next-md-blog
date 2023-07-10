// app/page.tsx
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allDocs, Doc } from 'contentlayer/generated'

function DocCard(doc: Doc) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link href={doc.slug} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
          {doc.title}
        </Link>
      </h2>
      {/*
      <time dateTime={doc.body.code} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(doc.date), 'LLLL d, yyyy')}
      </time>
      */}
      <div>
        <p className="mb-1 text-xl">{doc.description}</p>
      </div>
    </div>
  )
}

export default function Home() {
  const docs = allDocs.sort((a: any, b: any) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">
        테드 넬슨/テッド・ネルソン(Ted Nelson)
        <br/>
        <br/>
        “최고의 프로그래머란 조금 낫다기 보다는 그냥 좋은 존재이다. 그들은 개념 창의성, 속도, 설계의 독창성, 문제 해결 능력 중 어떤 기준으로 측정하든 10배나 낫다. ”
        <br/>
        “最高のプログラマは、単に優秀なプログラマよりわずかに優れているというわけではありません。 概念的な創造性、スピード、デザインの創意工夫、問題解決能力など、どのような基準で測っても、彼らは桁違いに優れています。”
      </h1>
      <br/>
        
      {docs.map((doc: any, idx: any) => (
        <DocCard key={idx} {...doc} />
      ))}
    </div>
  )
}
