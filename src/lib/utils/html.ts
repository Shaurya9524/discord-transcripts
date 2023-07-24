import { Message } from "../types/message"
import { JSDOM } from "jsdom"

export function getMessageHTML(message: Message) {
  const div = `<div>
  <p>${message.payload.content || "hello"}</p>
  </div>`

  return div
}

export function webpage(title: string, html: string) {
  const htmlContent = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
  </head>
  <body>
    ${html}
  </body>
  </html>`

  const dom = new JSDOM(htmlContent)
  const doc = dom.window.document

  return doc
}
