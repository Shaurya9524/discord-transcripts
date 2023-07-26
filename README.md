# web-discord-transcripts

`web-discord-transcripts` is an npm package that provides a convenient solution for creating web transcripts of chat conversations, particularly for Discord bots, with a focus on ticket systems. This package streamlines the process of generating chat logs and enables easy integration with web applications or user interfaces. It creates static html webpage which can be used to display the transcripts.

## Table of Contents

- [web-discord-transcripts](#web-discord-transcripts)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Reference](#api-reference)
  - [Examples](#examples)
  - [Contributing](#contributing)
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

1. First, you need to have a Discord bot set up in your Discord server. If you haven't created one yet, you can follow the official guide from Discord to create a bot and get its token.

2. Include `web-discord-transcripts` in your project file:

```js
const WebTranscripts = require('web-discord-transcripts')
```

3. Generate the static webpage

```js
import { getMessageNode, webpage } from "web-discord-transcripts"

const data = [
  { username: "john", content: "hi!" },
  { username: "shadow", content: "hi, how can I help you" },
]

const nodes = data.map((data) => {
  const node = getMessageNode({
    user: { username: data.username },
    payload: { content: data.content }
  })

  return node
})

const page = webpage({
  title: "ticket-transcript",
  data: {
    guild: {
      name: "Nightfang Community"
    }
  },
  content: nodes
})
```

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

`routers/transcript.js`:

```js
import { Router } from "express"
import { getMessageNode, webpage } from "web-discord-transcripts"

const router = Router()

router.get("/example", (_req, res) => {
  const data = [
    { username: "john", content: "hi!" },
    { username: "shadow", content: "hi, how can I help you" },
  ]

  const nodes = data.map((data) => {
    const node = getMessageNode({
      user: { username: data.username },
      payload: { content: data.content }
    })

    return node
  })

  const page = webpage({
    title: "ticket-transcript",
    data: {
      guild: {
        name: "Nightfang Community"
      }
    },
    content: nodes
  })

  res.status(200).send(page)
})

export default router
```

## Contributing

Contributions are welcome! If you find any issues or want to suggest enhancements, please open an issue or submit a pull request on the GitHub repository.

## License

`web-discord-transcripts` is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.