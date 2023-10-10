import { Guild as GuildProps } from "../../lib/types/guild"
import { error } from "../../lib/utils/error"

export class Guild {
  data: GuildProps

  constructor(data: GuildProps) {
    if (!data) {
      error("Guild data is required to create the guild object")
    }

    const { name } = data

    if (!name) {
      error("Guild name is required to create the guild object")
    }

    if (name.length < 2 || name.length > 32) {
      error("Guild name must be 2 and 32 characters")
    }

    this.data = data
  }
}
