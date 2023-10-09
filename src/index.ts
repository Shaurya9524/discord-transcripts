// main functions
import { Wrapper } from "./functions/utils/wrapper"
import { Webpage } from "./functions/main/webpage"
import { Message } from "./functions/main/message"

// utils
import { ChannelMention } from "./functions/main/channel"
import { RoleMention } from "./functions/main/role"
import { UserMention } from "./functions/main/user"

// builders
import { Embed } from "./functions/main/embed"

// types
export * from "./lib/types/channel"
export * from "./lib/types/embed"
export * from "./lib/types/file"
export * from "./lib/types/guild"
export * from "./lib/types/message"
export * from "./lib/types/role"
export * from "./lib/types/user"
export * from "./lib/types/webpage"

export {
  Wrapper, Webpage, Message,
  ChannelMention, RoleMention, UserMention,
  Embed
}

export default {
  Wrapper, Webpage, Message,
  ChannelMention, RoleMention, UserMention,
  Embed
}
