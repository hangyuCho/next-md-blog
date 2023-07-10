import * as React from "react"
import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 
      className={
        ` 
        ${className? className : ""}`
      }
      {...props}
      />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 
      className={
        ` 
        ${className? className : ""}`
      }
      {...props}
      />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 
      className={
        ` 
        ${className? className : ""}`
      }
      {...props}
      />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 
      className={
        ` 
        ${className? className : ""}`
      }
      {...props}
      />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5 
      className={
        ` 
        ${className? className : ""}`
      }
      {...props}
      />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6 
      className={
        ` 
        ${className? className : ""}`
      }
      {...props}
      />
  ),
  a: ({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a 
      className={
        ` 
        ${className? className : ""}`
      }
      {...props}
      />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p 
      className={
        ` 
        ${className? className : ""}`
      }
      {...props}
      />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul 
      className={
        ` 
        ${className? className : ""}`
      }
      {...props}
      />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol 
      className={
        ` 
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
        ` 
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



