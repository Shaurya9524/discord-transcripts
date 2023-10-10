import { Channel } from "../../functions/main/channel"
import { Guild } from "../../functions/main/guild"

export type ChatContent = JSX.Element[]

export type WebpageProps = {
  title: string
  data: {
    guild: Guild,
    chatChannel: Channel
  }
  content: ChatContent
}
