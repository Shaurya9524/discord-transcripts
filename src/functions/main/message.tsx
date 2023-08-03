import { Message as MessageProps } from "../../lib/types/message"
import EmbedComponent from "../../components/elements/embed"
import { resolveContent } from "../../lib/utils/content"
import { formatDate } from "../../lib/utils/time"
import Bot from "../../components/elements/bot"
import { error } from "../../lib/utils/error"
import { defaults } from "../../config/user"
import React from "react"

export function Message({ user, payload, time }: MessageProps) {
  if (!user || !payload || !time) {
    error("All message data fields (user, payload, time) are required to create the message")
  }

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

  if (embeds && !user.bot) {
    error("A user cannot send embeds")
  }

  const higestRoleColor = user.highestRole?.color
  const usernameColor = higestRoleColor ? higestRoleColor : defaults.color

  const messageContents = content && content.map((content, i) => <div key={i} className={`message-content-${i}`}>{resolveContent(content)}</div>)
  const messageEmbeds = embeds && embeds.map((embed, i) => <EmbedComponent key={i} embedData={embed.data} />)

  return (
    <div className="message">
      <img className="message-user-avatar" src={user.avatarURL} alt={user.username} />
      <div className="message-contents">
        <div className="message-head">
          <span className="message-username" style={{ color: usernameColor }}>{user.username}</span>
          {user.bot && <span className="message-bot-tag-wrapper"><Bot /></span>}
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
