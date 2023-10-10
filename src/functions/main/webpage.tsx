import WebpageComponent from "../../components/main/webpage"
import { WebpageProps } from "../../lib/types/webpage"
import { renderToString } from "react-dom/server"
import { error } from "../../lib/utils/error"
import React from "react"

export function Webpage(webpageData: WebpageProps): string {
  if (!webpageData.title || !webpageData.content || !webpageData.data || webpageData.content.length === 0) {
    error("All webpage data fields (content, data, title) are required to create the webpage")
  }

  const { title, content, data } = webpageData
  const node = <WebpageComponent title={title} data={data} content={content} />
  const html = renderToString(node)
  return `<!DOCTYPE html>${html}`
}
