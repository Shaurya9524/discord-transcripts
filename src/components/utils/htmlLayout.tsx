import { getCSSContent } from "../../lib/utils/css"
import React, { ReactNode } from "react"
import { readdirSync } from "fs"
import { join } from "path"

const stylesDir = join(__dirname, "../../styles")

export default function HTMLLayout({ title, children }: { title: string, children: ReactNode }) {
  function getCSSData() {
    try {
      const cssFiles = readdirSync(stylesDir)
      const cssContent = cssFiles.map((file) => getCSSContent(join(stylesDir, file)))
      return cssContent.join("\n")
    } catch (error) {
      console.error("error reading css files:", error)
      return ""
    }
  }

  const styles = getCSSData()

  return (
    <html>
      <head>
        <title>{title}</title>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
      </head>
      <body>
        <div className="root">
          {children}
        </div>
      </body>
    </html>
  )
}
