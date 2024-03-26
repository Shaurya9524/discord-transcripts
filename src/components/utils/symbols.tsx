import React from "react"

export function TextChannel({ height, width }: { height?: number, width?: number }) {
  return (
    <svg width={width ? `${width}` : "24"} height={height ? `${height}` : "24"} viewBox="0 0 24 24" aria-hidden="true" role="img">
      <path fill="#80848e" fillRule="evenodd" clipRule="evenodd"
        d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z">
      </path>
    </svg>
  )
}

export function MembersIcon(props: React.SVGProps<SVGSVGElement>) {
  const { height, width, ...otherProps } = props

  return (
    <svg width={width ? `${width}` : "24"} height={height ? `${height}` : "24"} viewBox="0 0 24 24" aria-hidden="true" role="img" className="discord-members-icon" {...otherProps}>
      <path fill="#b5bac1" fillRule="evenodd" clipRule="evenodd"
        d="M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM18.44 17.27c.15.43.54.73 1 .73h1.06c.83 0 1.5-.67 1.5-1.5a7.5 7.5 0 0 0-6.5-7.43c-.55-.08-.99.38-1.1.92-.06.3-.15.6-.26.87-.23.58-.05 1.3.47 1.63a9.53 9.53 0 0 1 3.83 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0c0 .83-.67 1.5-1.5 1.5a.2.2 0 0 1-.2-.16c-.2-.96-.56-1.87-.88-2.54-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.32.67-.67 1.58-.88 2.54a.2.2 0 0 1-.2.16A1.5 1.5 0 0 1 2 20.5Z">
      </path>
    </svg>
  )
}

export function HamburgerMenu() {
  const style: Record<string, React.CSSProperties> = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "3px",
      width: "20px",
      height: "30px",
      cursor: "pointer"
    },
    bar: {
      width: "100%",
      height: "3px",
      borderRadius: "2px",
      backgroundColor: "#80848e"
    }
  }

  return (
    <div style={style.container}>
      <div style={style.bar}></div>
      <div style={style.bar}></div>
      <div style={style.bar}></div>
    </div>
  )
}

const symbols = {
  textChannel: TextChannel,
  menu: HamburgerMenu
}

export default symbols
