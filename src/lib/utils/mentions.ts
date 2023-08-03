import { AdditionalFields, Mentions } from "../types/mentions"

export function getMentions<T extends string>(content: string, regex: RegExp, fields: T[]) {
  const mentions: Mentions<T>[] = []
  const matches = content.matchAll(regex)

  for (const match of matches) {
    const [fullMatch, ...rest] = match
    const additionalFieldsData = Object.fromEntries(fields.map((fieldName, i) => [fieldName, rest[i]])) as AdditionalFields<T>

    mentions.push({
      match: fullMatch,
      index: match.index ?? 0,
      ...additionalFieldsData
    })
  }

  return mentions
}
