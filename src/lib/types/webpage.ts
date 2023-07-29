import { Guild } from "./guild"

export type ChatContent = JSX.Element[]

export type WebpageProps = {
  title: string
  data: {
    guild: Guild,
    transcriptChannel: {
      name: string
    }
  }
  content: ChatContent
}
