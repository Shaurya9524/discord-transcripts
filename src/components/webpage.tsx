import { WebpageProps } from "../lib/types/webpage"
import Wrapper from "./wrapper"
import Layout from "./layout"
import React from "react"

import sidebarStyles from "../styles/sidebar.module.css"

export default function Webpage({ title, data, content }: WebpageProps) {
  const { guild } = data

  return (
    <Layout title={title}>
      <div className="root">
        <div className={sidebarStyles.sidebar}>
          <img src={guild.iconURL} alt={guild.name} />
        </div>
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
    </Layout>
  )
}
