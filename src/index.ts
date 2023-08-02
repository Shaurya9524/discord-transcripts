import { Wrapper } from "./functions/utils/wrapper"
import { UserMention } from "./functions/main/user"
import { Channel } from "./functions/main/channel"
import { Message } from "./functions/main/message"
import { Webpage } from "./functions/main/webpage"
import { Embed } from "./functions/main/embed"
import { Role } from "./functions/main/role"

export { Message, Webpage, Wrapper, Role, Channel, Embed, UserMention }

const webTranscripts = { Message, Webpage, Wrapper, Role, Channel, Embed, UserMention }

export default webTranscripts
