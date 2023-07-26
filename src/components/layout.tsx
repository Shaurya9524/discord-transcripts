import React, { ReactNode } from "react"

export default function Layout({ title, children }: { title: string, children: ReactNode }) {
  return (
    <html>
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="../styles/index.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}