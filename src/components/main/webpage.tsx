import { WebpageProps } from "../../lib/types/webpage"
import HTMLLayout from "../utils/htmlLayout"
import Sidebar from "./sidebar"
import Chat from "./chat"
import React from "react"

export default function Webpage({ title, data, content }: WebpageProps) {
  const { guild, chatChannel } = data

  return (
    <HTMLLayout title={title}>
      <div className="main">
        <Sidebar guild={guild} />
        <Chat content={content} channel={chatChannel} />
      </div>
    </HTMLLayout>
  )
}
