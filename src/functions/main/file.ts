import { File as FileProps } from "../../lib/types/file"
import { error } from "../../lib/utils/error"

export class File {
  data: FileProps

  constructor(data: FileProps) {
    if (!data) {
      error("File data is required to create the file object")
    }

    if (!data.url) {
      error("File url is required to create the file object")
    }

    this.data = data
  }
}
