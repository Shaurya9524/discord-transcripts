import ChannelComponent from "../../components/elements/channel"
import RoleComponent from "../../components/elements/role"
import { getChannelObjectsFromString } from "./channel"
import { getRoleObjectsFromString } from "./role"
import React, { isValidElement } from "react"

type ResolveData = (string | JSX.Element)[]

function resolveContentForRoles(contents: ResolveData): ResolveData {
  const data: ResolveData[] = []

  for (const content of contents) {
    const parts: ResolveData = []

    if (isValidElement(content)) {
      parts.push(content)
    }

    else {
      const contentStr = content as string
      const roleObjectsData = getRoleObjectsFromString(contentStr)

      if (roleObjectsData.length === 0) {
        parts.push(content)
      }

      else {
        let lastIndex = 0
        const entries = roleObjectsData.entries()

        for (const [elementIndex, data] of entries) {
          const { match, index, name, color } = data
          const component = <RoleComponent key={`${name}-${color}`} name={name} color={color} />

          parts.push(contentStr.slice(lastIndex, index))
          parts.push(component)
          lastIndex = index + match.length

          if (elementIndex === roleObjectsData.length - 1) {
            parts.push(contentStr.slice(lastIndex, contentStr.length))
          }
        }
      }
    }

    data.push(parts)
  }

  return data.flatMap(parts => parts)
}

function resolveContentForchannels(contents: ResolveData): ResolveData {
  const data: ResolveData[] = []

  for (const content of contents) {
    const parts: ResolveData = []

    if (isValidElement(content)) {
      parts.push(content)
    }

    else {
      const contentStr = content as string
      const channelObjectsData = getChannelObjectsFromString(contentStr)

      if (channelObjectsData.length === 0) {
        parts.push(content)
      }

      else {
        let lastIndex = 0
        const entries = channelObjectsData.entries()

        for (const [elementIndex, data] of entries) {
          const { match, index, name } = data
          const component = <ChannelComponent key={`${name}-${elementIndex}`} name={name} />

          parts.push(contentStr.slice(lastIndex, index))
          parts.push(component)
          lastIndex = index + match.length

          if (elementIndex === channelObjectsData.length - 1) {
            parts.push(contentStr.slice(lastIndex, contentStr.length))
          }
        }
      }
    }

    data.push(parts)
  }

  return data.flatMap(parts => parts)
}

export function resolveContent(content: string | JSX.Element) {
  let parsedContent = [content]
  const resolutionParameters = [
    resolveContentForRoles,
    resolveContentForchannels
  ]

  for (const resParam of resolutionParameters) {
    parsedContent = resParam(parsedContent)
  }

  return parsedContent
}
