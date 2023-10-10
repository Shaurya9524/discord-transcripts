# web-discord-transcripts

<div align="center">
	<p>
		<a href="https://discord.gg/hSpXyy8Cgh">
    <img src="https://img.shields.io/discord/960453487743881237?color=5865F2&logo=discord&logoColor=white" alt="discord server" />
    </a>
		<a href="https://www.npmjs.com/package/web-discord-transcripts">
    <img src="https://img.shields.io/npm/v/web-discord-transcripts.svg?maxAge=3600&logo=npm" alt="npm version" />
    </a>
		<a href="https://www.npmjs.com/package/web-discord-transcripts">
    <img src="https://img.shields.io/npm/dt/web-discord-transcripts.svg?maxAge=3600&logo=npm" alt="npm downloads" />
    </a>
	</p>
</div>

`web-discord-transcripts` is an npm package that provides a convenient solution for creating web transcripts of chat conversations, particularly for Discord bots, with a focus on ticket systems. This package streamlines the process of generating chat logs and enables easy integration with web applications or user interfaces. It creates static html webpage which can be used to display the transcripts.

## Table of Contents

- [web-discord-transcripts](#web-discord-transcripts)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Examples](#examples)
  - [Contributing](#contributing)
  - [Help](#help)
  - [License](#license)

## Installation

You can install `web-discord-transcripts` using npm or yarn:

```bash
npm install web-discord-transcripts
# or
yarn add web-discord-transcripts
```

## Usage

To use `web-discord-transcripts` in your Discord bot or web application, follow the steps below:

Generate the static webpage:

```js
import { Webpage, Message } from "web-discord-transcripts"
import { channels } from "../constants/channel.js"
import { guilds } from "../constants/guild.js"
import data from "../transcripts/example.js"

const nodes = data.map((data) => {
  const node = Message({
    user: data.user,
    payload: { content: data.content, embeds: data.embeds },
    time: new Date()
  })

  return node
})

const page = Webpage({
  title: "ticket-transcript",
  content: nodes,
  data: {
    guild: guilds.nightfangCommunity,
    chatChannel: channels.ticketTranscripts
  }
})
```

For example, you can use express to show the generated webpage on the browser.
Feel free to customize the above steps according to your application's specific needs. This package aims to simplify the process of managing and displaying chat transcripts for discord conversations, especially useful for ticket system.

## Examples

`index.js`:

```js
import express from "express"
import transcriptRouter from "./routes/transcript.js"

const app = express()
const port = 3000

app.get("/", (_req, res) => {
  res.send("api (/) endpoint")
})

app.use("/transcripts", transcriptRouter)

app.listen(port, () => {
  console.log(`server started at port: ${port}`)
})
```

`constants/channel.js`:
```js
import { Channel } from "web-discord-transcripts"

export const channels = {
  ticketTranscripts: new Channel({ name: "ticket-transcripts" }),
  modApplication: new Channel({ name: "📄 mod-application" })
}
```

`constants/guild.js`:
```js
import { Guild } from "web-discord-transcripts"

export const guilds = {
  nightfangCommunity: new Guild({
    name: "Nightfang Community",
    iconURL: "https://cdn.discordapp.com/icons/960453487743881237/aaa40a37a4fa84580aa317e7de696d24.webp"
  })
}
```

`constants/role.js`:
```js
import { Role } from "web-discord-transcripts"

export const roles = {
  staff: new Role({ name: "Staff", color: "#5865f2" }),
  bot: new Role({ name: "Bot", color: "#f87248" }),
  support: new Role({ name: "Support", color: "#ffff00" }),
  member: new Role({ name: "Member", color: "#ffffff" }),
}
```

`constants/user.js`:
```js
import { User } from "web-discord-transcripts"
import { roles } from "./role.js"

export const users = {
  nightfang: new User({
    username: "Nightfang",
    avatarURL: "https://cdn.discordapp.com/avatars/984245658905104384/a90a3ad0359ff2f67e65b40a13e2cb0d.png?size=1024",
    bot: true,
    highestRole: roles.bot
  }),
  shadow: new User({
    username: "Shadow",
    avatarURL: "https://cdn.discordapp.com/avatars/893705256368750592/957bb7cf2f720432d818c9257a610b8c.png?size=1024",
    highestRole: roles.staff
  }),
  john: new User({
    username: "John",
    highestRole: roles.support
  }),
  joe: new User({
    username: "Joe",
    highestRole: roles.member
  })
}
```

`transcripts/example.js`:

```js
import { Embed } from "web-discord-transcripts"

import { channels } from "../constants/channel.js"
import { users } from "../constants/user.js"
import { roles } from "../constants/role.js"

const welcomeEmbed = new Embed({
  color: "#12c4ff",
  title: "Welcome Joe",
  description: `Please wait patiently for the ${roles.staff.mention()} to respond, until then do tell the purpose of creating the ticket`
})

const closeEmbed = new Embed({
  color: "#f87248",
  description: `Ticket closed by ${users.john.mention()}`
})

const data = [
  {
    user: users.nightfang,
    embeds: [welcomeEmbed]
  },
  {
    user: users.joe,
    content: [
      "Hello",
      `${roles.staff.mention()} I want to apply for ${roles.support.mention()} role`
    ]
  },
  {
    user: users.shadow,
    content: [
      `${users.john.mention()} will handle this ticket, I'm busy right now`
    ]
  },
  {
    user: users.john,
    content: [
      "Hi!",
      `${users.joe.mention()} please apply for the support role at ${channels.modApplication.mention()}`,
      `You can ping me if you want to ask anything`
    ]
  },
  {
    user: users.joe,
    content: [
      "Okay, thanks for the support!",
      "You may close the ticket"
    ]
  },
  {
    user: users.nightfang,
    embeds: [closeEmbed]
  },
  {
    user: users.nightfang,
    content: [
      "This ticket will be deleted in a few seconds"
    ]
  }
]

export default data
```

`routes/transcript.js`:

```js
import { Webpage, Message } from "web-discord-transcripts"
import { channels } from "../constants/channel.js"
import { guilds } from "../constants/guild.js"
import data from "../transcripts/example.js"
import { Router } from "express"

const router = Router()

router.get("/example", (_req, res) => {
  const nodes = data.map((data) => {
    const node = Message({
      user: data.user,
      payload: { content: data.content, embeds: data.embeds },
      time: new Date()
    })

    return node
  })

  const page = Webpage({
    title: "ticket-transcript",
    content: nodes,
    data: {
      guild: guilds.nightfangCommunity,
      chatChannel: channels.ticketTranscripts
    }
  })

  res.status(200).send(page)
})

export default router
```

## Contributing

Contributions are welcome! If you find any issues or want to suggest enhancements, please open an issue or submit a pull request on the GitHub repository. Always ensure to check if an issue or pull request already exists before creating your own! There’s no need to hurry in making contributions, take your time to do it right.

## Help

For support and assistance, join our [Discord server](https://discord.gg/hSpXyy8Cgh) and connect with the community to resolve any issues or queries related to the package.

## License

`web-discord-transcripts` is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.