import { Embed as EmbedProps } from "../../lib/types/embed"
import { checkEmbed } from "../../lib/utils/embeds"
import { error } from "../../lib/utils/error"

export class Embed {
  data: EmbedProps

  constructor(embedData: EmbedProps) {
    if (!embedData) {
      error("Embed data is required to create an embed")
    }

    const embedCheck = checkEmbed(embedData)

    if (!embedCheck.ok) {
      error(embedCheck.message)
    }

    this.data = embedData
  }
}
