import { WebpageProps } from "../lib/types/webpage"
import Wrapper from "./wrapper"
import React from "react"

export default function Webpage({ title, content }: WebpageProps) {
  return (
    <html>
      <head>
        <title>{title}</title>
      </head>
      <body>
        <div id="root">
          <Wrapper>
            {
              Array.isArray(content)
                ? content.map((element, i) => (
                  <Wrapper key={i}>
                    {element}
                  </Wrapper>
                ))
                : content
            }
          </Wrapper>
        </div>
      </body>
    </html>
  )
}
