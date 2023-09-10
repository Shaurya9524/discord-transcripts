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

export { Message, Webpage, Wrapper, RoleMention, ChannelMention, Embed, UserMention }

const webTranscripts = { Message, Webpage, Wrapper, RoleMention, ChannelMention, Embed, UserMention }

export default webTranscripts
