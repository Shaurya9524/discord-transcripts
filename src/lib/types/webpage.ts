import { Channel } from "./channel"
import { Guild } from "./guild"

export type ChatContent = JSX.Element[]

export type WebpageProps = {
  title: string
  data: {
    guild: Guild,
    chatChannel: Channel
  }
  content: ChatContent
}
