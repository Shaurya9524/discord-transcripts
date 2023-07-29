import { renderToString } from "react-dom/server"
import { WebpageProps } from "../types/webpage"
import Webpage from "../../components/main/webpage"
import Wrapper from "../../components/utils/wrapper"
import { Message } from "../types/message"
import React from "react"

export function getMessageNode({ user, payload }: Message) {
  return (
    <div className="message">
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

export function webpage({ title, data, content }: WebpageProps) {
  const node = <Webpage title={title} data={data} content={content} />
  const html = renderToString(node)
  return html
}
