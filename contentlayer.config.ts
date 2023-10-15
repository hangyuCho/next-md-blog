// contentlayer.config.ts
import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"
import remarkMdxImages from 'remark-mdx-images'
 
const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  }
}

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string' },
    cover: {type: 'string', required : true },
    published: { type: 'boolean', default: true },
    createdAt: { type: 'date' },
  },
  computedFields,
}))

export default makeSource({ 
  contentDirPath: 'public/content', 
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm, remarkMdxImages],
    esbuildOptions: (options: any) => {
      options.loader = {
        ...options.loader,
        ".png": "dataurl",
      };
      return options
    },
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node: any) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }]
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push("line--highlighted")
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ["word--highlighted"]
          },
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          }
        }
      ]
    ],
  }
})
