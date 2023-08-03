import ChannelMention from "../../components/elements/channel"
import RoleMention from "../../components/elements/role"
import UserMention from "../../components/elements/user"

import React, { isValidElement } from "react"
import { Mentions } from "../types/mentions"
import { getMentions } from "./mentions"
import { regex } from "./regex"

type Content = string | JSX.Element

function resolveMentions<T extends string>(
  contents: Content[],
  regex: RegExp,
  fields: T[],
  callback: (data: Mentions<T>) => JSX.Element
): Content[] {
  const data: Content[][] = []

  for (const content of contents) {
    const parts: Content[] = []

    if (isValidElement(content)) {
      parts.push(content)
    }

    else {
      const contentStr = content as string
      const objectsData = getMentions(contentStr, regex, fields)

      if (objectsData.length === 0) {
        parts.push(content)
      }

      else {
        let lastIndex = 0
        const entries = objectsData.entries()

        for (const [elementIndex, data] of entries) {
          const { match, index } = data
          const component = callback(data)

          parts.push(contentStr.slice(lastIndex, index))
          parts.push(component)
          lastIndex = index + match.length

          if (elementIndex === objectsData.length - 1) {
            parts.push(contentStr.slice(lastIndex, contentStr.length))
          }
        }
      }
    }

    data.push(parts)
  }

  return data.flatMap(parts => parts)
}

function resolveRoleMentions(contents: Content[]): Content[] {
  return resolveMentions(contents, regex.mention.role, ["name", "color"], (data) => {
    const { name, color } = data
    return <RoleMention name={name} color={color} />
  })
}

function resolveUserMentions(contents: Content[]): Content[] {
  return resolveMentions(contents, regex.mention.user, ["username"], (data) => {
    const { username } = data
    return <UserMention username={username} />
  })
}

function resolveChannelMentions(contents: Content[]): Content[] {
  return resolveMentions(contents, regex.mention.channel, ["name"], (data) => {
    const { name } = data
    return <ChannelMention name={name} />
  })
}

export function resolveContent(content: Content) {
  let parsedContent = [content]
  const resParams = [resolveRoleMentions, resolveUserMentions, resolveChannelMentions,]

  for (const resParam of resParams) {
    parsedContent = resParam(parsedContent)
  }

  return parsedContent
}
