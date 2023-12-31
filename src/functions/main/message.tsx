import { Message as MessageProps } from "../../lib/types/message"
import EmbedComponent from "../../components/elements/embed"
import { resolveContent } from "../../lib/utils/content"
import globalDefaults from "../../assets/defaults"
import { formatDate } from "../../lib/utils/time"
import Bot from "../../components/elements/bot"
import { error } from "../../lib/utils/error"
import { defaults } from "../../config/user"
import React from "react"

export function Message(data: MessageProps) {
  if (!data.user || !data.payload || !data.time) {
    error("All message data fields (user, payload, time) are required to create the message")
  }

  const { user, payload, time } = data
  const { content, embeds, files } = payload

  if (!content && !embeds && !files) {
    error("Any one of the message payload fields (content, embeds, files) are required")
  }

  if (content) {
    if (content.length === 0) {
      error("Content cannot be empty")
    }

    for (const contentStr of content) {
      if (contentStr.length === 0) {
        error("Content string cannot be empty")
        break
      }
    }
  }

  if (embeds && !user.data.bot) {
    error("A user cannot send embeds")
  }

  const higestRoleColor = user.data.highestRole?.data.color
  const usernameColor = higestRoleColor ? higestRoleColor : defaults.color
  const avatar = user.data.avatarURL || globalDefaults.userAvatar
  const defaultAvatarStyles: React.CSSProperties = { padding: "7px" }

  const messageContents = content && content.map((content, i) => <div key={i} className={`message-content-${i}`}>{resolveContent(content)}</div>)
  const messageEmbeds = embeds && embeds.map((embed, i) => <EmbedComponent key={i} embedData={embed.data} />)

  return (
    <div className="message">
      <div className="message-user-avatar-holder">
        <img className="message-user-avatar" src={avatar} alt={user.data.username} style={avatar === globalDefaults.userAvatar ? defaultAvatarStyles : {}} />
      </div>
      <div className="message-contents">
        <div className="message-head">
          <span className="message-username" style={{ color: usernameColor }}>{user.data.username}</span>
          {user.data.bot && <span className="message-bot-tag-wrapper"><Bot /></span>}
          <span className="message-time">{formatDate(time)}</span>
        </div>
        <div className="message-body">
          <div className="message-content">{messageContents}</div>
          <div className="message-embeds">{messageEmbeds}</div>
        </div>
      </div>
    </div>
  )
}
