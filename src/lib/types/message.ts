import { Embed } from "../../functions/main/embed"
import { File } from "./file"
import { User } from "./user"

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
