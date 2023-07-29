import { readFileSync } from "fs"

export function getCSSContent(filePath: string) {
  const content = readFileSync(filePath, "utf-8")
  return content
}
