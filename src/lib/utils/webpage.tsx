import { renderToString } from "react-dom/server"
import { WebpageProps } from "../types/webpage"
import Webpage from "../../components/webpage"
import { Message } from "../types/message"
import React from "react"
import Wrapper from "../../components/wrapper"

export function getMessageNode({ user, payload }: Message) {
  return (
    <div>
      <p>{user.username}</p>
      <p>{payload.content ? payload.content : "none"}</p>
    </div>
  )
}

export function wrapper(elements: JSX.Element[]) {
  return (
    <Wrapper>
      {
        elements.map((element, i) => (
          <Wrapper key={i}>
            {element}
          </Wrapper>
        ))
      }
    </Wrapper>
  )
}

export function webpage({ title, content }: WebpageProps) {
  const node = <Webpage title={title} content={content} />
  const html = renderToString(node)
  return html
}
