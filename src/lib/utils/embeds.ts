import { isHexColor, isImageURL, isURL } from "./regex"
import { Embed } from "../types/embed"
import { Response } from "./response"

export const limits = {
  title: {
    length: {
      min: 1,
      max: 256
    }
  },
  description: {
    length: {
      min: 0,
      max: 4096
    }
  },
  author: {
    name: {
      length: {
        min: 0,
        max: 256
      }
    }
  },
  fields: {
    max: 25,
    name: {
      length: {
        min: 1,
        max: 256
      }
    },
    value: {
      length: {
        min: 1,
        max: 1024
      }
    }
  },
  footer: {
    text: {
      length: {
        min: 0,
        max: 2048
      }
    }
  },
  totalLength: 6000,
}

export function checkEmbed(data: Embed) {
  const { title, url, description, color, author, image, thumbnail, footer, timestamp } = data
  const keyFields = ["title", "description", "author name", "image", "thumbnail", "footer text"]

  if (!title && !description && !author?.name && !image?.url && !thumbnail?.url && !footer?.text) {
    return Response(false, `One of the following fields is required to create an embed: ${keyFields.map(field => field)}`, { recevied: title })
  }

  if (title && (title.length < limits.title.length.min || title.length > limits.title.length.max)) {
    return Response(false, `Title must be between ${limits.title.length.min} and ${limits.title.length.max} characters long`, { recevied: title })
  }

  if (url && !isURL(url)) {
    return Response(false, "URL must be a valid URL", { recevied: url })
  }

  if (color && !isHexColor(color)) {
    return Response(false, `Color must be a valid hex code, e.g. #12c4ff`, { recevied: color })
  }

  if (description && (description.length < limits.description.length.min || description.length > limits.description.length.max)) {
    return Response(false, `Description must be between ${limits.description.length.min} and ${limits.description.length.max} characters long`, {
      recevied: description
    })
  }

  if (author) {
    if (!author.name) {
      return Response(false, `Author name is required to set the author of the embed`, { received: author.name })
    }

    if (author.name.length < limits.author.name.length.min || author.name.length > limits.author.name.length.max) {
      return Response(false, `Author name must be between ${limits.author.name.length.min} and ${limits.author.name.length.max} characters long`, {
        recevied: author.name
      })
    }

    if (author.iconURL && !isImageURL(author.iconURL)) {
      return Response(false, "Author icon must be a valid image URL", { recevied: author.iconURL })
    }

    if (author.url && !isURL(author.url)) {
      return Response(false, "Author URL must be a valid URL", { recevied: author.url })
    }
  }

  if (image && !isImageURL(image.url)) {
    return Response(false, "Image must be a valid image URL", { recevied: image.url })
  }

  if (thumbnail && !isImageURL(thumbnail.url)) {
    return Response(false, "Thumbnail must be a valid image URL", { recevied: thumbnail.url })
  }

  if (footer) {
    if (!footer.text) {
      return Response(false, `Footer text is required to set the footer of the embed`, { received: footer.text })
    }

    if (footer.text.length < limits.footer.text.length.min || footer.text.length > limits.footer.text.length.max) {
      return Response(false, `Footer text must be between ${limits.footer.text.length.min} and ${limits.footer.text.length.max} characters long`, {
        recevied: footer.text
      })
    }

    if (footer.iconURL && !isImageURL(footer.iconURL)) {
      return Response(false, "Footer icon must be a valid image URL", { recevied: footer.iconURL })
    }
  }

  if (timestamp && typeof timestamp !== "boolean") {
    return Response(false, "Timestamp must be a boolean", { recevied: timestamp })
  }

  const textFields = [title, description, author?.name, footer?.text]
  const totalLength = textFields.reduce((acc, curr) => acc + (curr?.length ?? 0), 0)

  if (totalLength > limits.totalLength) {
    return Response(false, `The sum of all text fields must be ${limits.totalLength} characters or less`, { recevied: data, totalLength })
  }

  return Response(true, "Embed is valid", { recevied: data })
}
