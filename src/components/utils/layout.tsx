import { getFileContent } from "../../lib/utils/file"
import React, { ReactNode } from "react"
import { readdirSync } from "fs"
import { join } from "path"

const stylesDir = join(__dirname, "../../styles")
const scriptsDir = join(__dirname, "../../scripts")

export default function HTMLLayout({ title, children }: { title: string, children: ReactNode }) {
  function getCSSData() {
    try {
      const cssFiles = readdirSync(stylesDir)
      const cssContentArray = cssFiles.map((file) => getFileContent(join(stylesDir, file)))

      const importStatements = cssContentArray.filter(content => content.startsWith("@import")).join("\n")
      const nonImportStatements = cssContentArray.filter(content => !content.startsWith("@import")).join("\n")
      const parsedCSSContent = `${importStatements}\n${nonImportStatements}`

      return parsedCSSContent
    } catch (error) {
      console.error("error reading css files:", error)
      return ""
    }
  }

  function getScripts() {
    try {
      const scriptFiles = readdirSync(scriptsDir)
      const scriptContentArray = scriptFiles.filter(file => file.endsWith(".js")).map((file) => getFileContent(join(scriptsDir, file)))

      const parsedScriptsContent = scriptContentArray.join("\n")

      return parsedScriptsContent
    } catch (error) {
      console.error("error reading script files:", error)
      return ""
    }
  }

  const styles = getCSSData()
  const scripts = getScripts()

  return (
    <html>
      <head>
        <title>{title}</title>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div className="root">
          {children}
        </div>
        <script dangerouslySetInnerHTML={{ __html: scripts }} />
      </body>
    </html>
  )
}
