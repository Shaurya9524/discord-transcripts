import { Embed as EmbedProps } from "../../lib/types/embed"
import { error } from "../../lib/utils/error"

export class Embed {
  data: EmbedProps

  constructor(embedData: EmbedProps) {
    if (!embedData) {
      error("Embed data is required to create an embed")
    }

    this.data = embedData
  }
}
