import * as React from "react"
import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 
      className={
        `text-4xl 
        ${className? className : ""}`
      }
      {...props}
      />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 
      className={
        `text-3xl 
        ${className? className : ""}`
      }
      {...props}
      />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 
      className={
        `text-2xl
        ${className? className : ""}`
      }
      {...props}
      />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 
      className={
        `text-xl
        ${className? className : ""}`
      }
      {...props}
      />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5 
      className={
        `text-lg
        ${className? className : ""}`
      }
      {...props}
      />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6 
      className={
        `text-base
        ${className? className : ""}`
      }
      {...props}
      />
  ),
  a: ({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a 
      className={
        `text-indigo-500
        ${className? className : ""}`
      }
      {...props}
      />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p 
      className={
        `text-sm
        ${className? className : ""}`
      }
      {...props}
      />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul 
      className={
        `list-disc list-inside pl-4
        ${className? className : ""}`
      }
      {...props}
      />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol 
      className={
        `list-decimal list-inside pl-4
        ${className? className : ""}`
      }
      {...props}
      />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li 
      className={
        `
        ${className? className : ""}`
      }
      {...props}
      />
  ),
  blockquote: ({ className, ...props }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote 
      className={
        `before:content-['”'] before:block before:text-4xl
         after:content-['”'] after:block after:text-4xl
        ${className? className : ""}`
      }
      {...props}
      />
  ),
  img: ({ className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img 
      className={
        ` 
        ${className? className : ""}`
      }
      {...props}
      />
  ),
  hr: ({ ...props }) => (
    <hr 
      className={
        ``
      }
      {...props}
      />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <table 
      className={
        ` 
        ${className? className : ""}`
      }
      {...props}
      />
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr 
      className={
        ` 
        ${className? className : ""}`
      }
      {...props}
      />
  ),
  th: ({ className, ...props }: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
    <th 
      className={
        ` 
        ${className? className : ""}`
      }
      {...props}
      />
  ),
  td: ({ className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td 
      className={
        ` 
        ${className? className : ""}`
      }
      {...props}
      />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre 
      className={
        ` 
        ${className? className : ""}`
      }
      {...props}
      />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code 
      className={
        ` 
        ${className? className : ""}`
      }
      {...props}
      />
  ),
  //Image,

}

interface MdxProps {
  code: string
}

const Mdx = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code)
  return (
    <div>
      <Component components={components} />
    </div>
  )
}
export default Mdx



