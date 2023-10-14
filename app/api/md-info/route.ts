import fs from "fs"
import { promisify } from "util"
import path from "path"
const stat = promisify(fs.stat)

export async function GET() {

  try {
    let info = stat(path.join(__dirname, "../../../../../public", "content", "blog", "mdx-test.mdx"))
    return Response.json({ mtime: (await info).ctime })
  } catch(e) {
    console.error(e)
    return Response.json({ mtime: null })
  }
  
}