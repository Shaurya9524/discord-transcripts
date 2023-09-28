# Description
# Discord Transcript
NPM package that creates a HTML Transcript of a channel messages that can be saved for later use
Useful for users that wants to store messages
Useful for Tickets
Check out our website dtranscript.cf coming soon.
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
  - [API Reference](#api-reference)
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
import { guild } from "../constants/guild.js"
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
    guild: guild.nightfangCommunity,
    chatChannel: { name: "ticket-transcripts" }
  }
})
```

For example, you can use express to show the generated webpage on the browser.
Feel free to customize the above steps according to your application's specific needs. This package aims to simplify the process of managing and displaying chat transcripts for discord conversations, especially useful for ticket system.

## API Reference

Coming soon

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

`constants/role.js`:

```js
import { RoleMention } from "web-discord-transcripts"

export const role = {
  admin: RoleMention({ name: "Admin", color: "#12c4ff" }),
  mod: RoleMention({ name: "Mod", color: "#f59342" }),
  support: RoleMention({ name: "Support Team", color: "#ffff00" }),
  member: RoleMention({ name: "Member", color: "#ffffff" })
}
```

`constants/user.js`:

```js
export const user = {
  shadow: {
    username: "Shadow",
    avatarURL: "https://yt3.ggpht.com/mClYrQ4m2AifKcudIMglr-nh2fc3Pz8ca7eo5TE9_hPHbRayr3C71g5-fajjUIrF3lRIXSwXL1I=s88-c-k-c0x00ffffff-no-rj",
    bot: true,
    highestRole: {
      name: "Admin",
      color: "#12c4ff"
    }
  },
  john: {
    username: "John",
    avatarURL: "https://cdn.dribbble.com/users/1784672/screenshots/17395334/media/b1f1a31cffe99b2d8dbcf04e0a9a1b42.png?resize=400x0"
  },
  joe: {
    username: "Joe",
    avatarURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXo-425kMS5bzQw-ubghfVDyHsmjaJapowOWhRBYvpvTROWcFcw-uL3Q6ixN83guDClYg&usqp=CAU",
    highestRole: {
      name: "Support Team",
      color: "#ffff00"
    }
  }
}
```

`transcripts/example.js`:

```js
import { ChannelMention, Embed, UserMention } from "web-discord-transcripts"
import { role } from "../constants/role.js"
import { user } from "../constants/user.js"

const infoEmbed = new Embed({
  author: {
    name: "author name"
  },
  title: "title",
  color: "#12c4ff",
  description: "description",
  footer: {
    text: "footer text"
  },
  timestamp: true
})

const data = [
  {
    user: user.john,
    content: [
      "Hello",
      `${role.admin} I want to apply for ${role.mod}`
    ]
  },
  {
    user: user.shadow,
    content: [
      "Please contact the support team for that, I'm currently busy"
    ],
    embeds: [infoEmbed]
  },
  {
    user: user.john,
    content: [
      `${role.support} please help me out!`
    ]
  },
  {
    user: user.joe,
    content: [
      `Sure, please apply for ${role.mod} at ${ChannelMention({ name: "📄 mod-application" })}`
    ]
  },
  {
    user: user.john,
    content: [
      "Okay, thanks for the support!",
      "You can close the ticket if you want"
    ]
  },
  {
    user: user.shadow,
    content: [
      `Transcript saved - ticket handled by ${UserMention({ username: "Joe" })}`,
      "This ticket will be closed in a few seconds"
    ]
  }
]

export default data
```

`routes/transcript.js`:

```js
import { Webpage, Message } from "web-discord-transcripts"
import { guild } from "../constants/guild.js"
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
      guild: guild.nightfangCommunity,
      chatChannel: { name: "ticket-transcripts" }
    }
  })

  res.status(200).send(page)
})

export default router
```

## Contributing

Contributions are welcome! If you find any issues or want to suggest enhancements, please open an issue or submit a pull request on the GitHub repository.

## Help

For support and assistance, join our [Discord server](https://discord.gg/hSpXyy8Cgh) and connect with the community to resolve any issues or queries related to the package.

## License

`web-discord-transcripts` is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
# Examples

const tranascript = require('discord-transcript');
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", async(message) => {
let channel = message.channel;


let messagecollection = message.channel.messages.fetch({
limit: 100

});

let link = await transcript.generate(message, messagecollection, channel);

return message.channel.send(link);
});
/*
OUTPUT: 

{
  "url": "https://discord-archive.herokuapp.com/view?id=841050751571853342",
  "id": "841050751571853342",
}
*/
