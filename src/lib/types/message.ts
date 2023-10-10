import { Embed } from "../../functions/main/embed"
import { File } from "../../functions/main/file"
import { User } from "../../functions/main/user"

export interface MessagePayload {
  content?: string[]
  embeds?: Embed[]
  files?: File[]
}

export interface Message {
  user: User
  payload: MessagePayload
  time: Date
}
