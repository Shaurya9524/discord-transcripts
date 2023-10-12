import { User as UserProps } from "../../lib/types/user"
import { error } from "../../lib/utils/error"
import { Role } from "./role"

export class User {
  data: UserProps

  constructor(data: UserProps) {
    if (!data) {
      error("User data is required to create the user object")
    }

    const { username, highestRole } = data
    const bot = data.bot ?? false

    if (!username) {
      error("Username is required to create the user object")
    }

    if (username.length < 2 || username.length > 32) {
      error("The username must be between 2 and 32 characters")
    }

    if (highestRole && !(highestRole instanceof Role)) {
      error("Invalid role object provided for the highest role of the user object")
    }

    data.bot = bot
    this.data = data
  }

  mention() {
    const username = this.data.username
    return `UserMention(${username})`
  }
}
