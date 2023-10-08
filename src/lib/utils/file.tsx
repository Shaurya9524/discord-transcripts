import { readFileSync } from "fs"

export function getFileContent(filePath: string) {
  const content = readFileSync(filePath, "utf-8")
  return content
}
