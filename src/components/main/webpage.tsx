import { WebpageProps } from "../../lib/types/webpage"
import HTMLLayout from "../utils/htmlLayout"
import { GuildNavbar } from "./guildbar"
import Sidebar from "./sidebar"
import Chat from "./chat"
import React from "react"

export default function Webpage({ title, data, content }: WebpageProps) {
  const { guild, chatChannel } = data

  return (
    <HTMLLayout title={title}>
      <div className="main">
        <div className="sidebars">
          <Sidebar guild={guild} />
          <GuildNavbar guild={guild} channel={chatChannel} />
        </div>
        <Chat content={content} channel={chatChannel} />
      </div>
    </HTMLLayout>
  )
}
